import type { QueryStringConfig } from './ProductsList'
import { orderConstants, sortByConstants } from '../../../constants/product'
import classNames from 'classnames'
import { createSearchParams, Link, useNavigate } from 'react-router-dom'
import { omit } from 'lodash'

interface ISortFilterProps {
  queryConfig: QueryStringConfig
  pageSize: number
}

const SortFilter = ({ pageSize, queryConfig }: ISortFilterProps) => {
  const page = Number(queryConfig.page)
  const { sort_by = sortByConstants.view, order } = queryConfig
  const navigate = useNavigate()
  const isActive = (value: Exclude<QueryStringConfig['sort_by'], undefined>) => {
    return sort_by === value
  }
  const handleSortChange = (value: Exclude<QueryStringConfig['sort_by'], undefined>) => {
    navigate({
      pathname: '/',
      search: createSearchParams(
        omit(
          {
            ...queryConfig,
            sort_by: value
          },
          ['order']
        )
      ).toString()
    })
  }
  const handleSortByPrice = (value: Exclude<QueryStringConfig['order'], undefined>) => {
    navigate({
      pathname: '/',
      search: createSearchParams({
        ...queryConfig,
        sort_by: sortByConstants.price,
        order: value
      }).toString()
    })
  }
  console.log("render")
  return (
    <div className='bg-gray-300/40 py-4 px-3'>
      <div className='flex flex-wrap items-center justify-between gap-2'>
        <div className='flex items-center flex-wrap gap-2'>
          <div>Sắp xếp theo</div>
          <button
            className={classNames('h-8 px-4 capitalize text-center', {
              'bg-primary_orange text-white text-sm hover:bg-primary_orange/80': isActive(sortByConstants.view),
              'bg-white text-black text-sm hover:bg-slate-100': !isActive(sortByConstants.view)
            })}
            onClick={() => handleSortChange(sortByConstants.view)}
          >
            Phổ biến
          </button>
          <button
            className={classNames('h-8 px-4 capitalize text-center', {
              'bg-primary_orange text-white text-sm hover:bg-primary_orange/80': isActive(sortByConstants.createdAt),
              'bg-white text-black text-sm hover:bg-slate-100': !isActive(sortByConstants.createdAt)
            })}
            onClick={() => handleSortChange(sortByConstants.createdAt)}
          >
            Mới nhất
          </button>
          <button
            className={classNames('h-8 px-4 capitalize text-center', {
              'bg-primary_orange text-white text-sm hover:bg-primary_orange/80': isActive(sortByConstants.sold),
              'bg-white text-black text- hover:bg-slate-100': !isActive(sortByConstants.sold)
            })}
            onClick={() => handleSortChange(sortByConstants.sold)}
          >
            Bán chạy
          </button>
          <select
            className={classNames('h-8 px-2 capitalize text-center outline-none', {
              'bg-primary_orange text-white text-sm hover:bg-primary_orange/80': isActive(sortByConstants.price),
              'bg-white text-black text-sm hover:bg-slate-100': !isActive(sortByConstants.price)
            })}
            onChange={(e) => handleSortByPrice(e.target.value)}
            value={order || ''}
          >
            <option value='' disabled>
              Giá
            </option>
            <option value={orderConstants.asc} className='bg-white text-black'>
              Giá: Thấp đến cao
            </option>
            <option value={orderConstants.desc} className='bg-white text-black'>
              Giá: Cao đến thấp
            </option>
          </select>
        </div>
        <div className='ml-2 flex items-center'>
          <div className='mr-3'>
            <span className='text-primary_orange'>{page}</span>
            <span>/{pageSize}</span>
          </div>
          {page === 1 ? (
            <span className='flex h-8 w-9 cursor-not-allowed items-center justify-center rounded-tl-sm rounded-bl-sm bg-white/60  shadow hover:bg-slate-100'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-3 w-3'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
              </svg>
            </span>
          ) : (
            <Link
              to={{
                pathname: '/',
                search: createSearchParams({
                  ...queryConfig,
                  page: (page - 1).toString()
                }).toString()
              }}
              className='flex h-8 w-9  items-center justify-center rounded-tl-sm rounded-bl-sm bg-white  shadow hover:bg-slate-100'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-3 w-3'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
              </svg>
            </Link>
          )}
          {page === pageSize ? (
            <span className='flex h-8 w-9 cursor-not-allowed items-center justify-center rounded-tl-sm rounded-bl-sm bg-white/60  shadow hover:bg-slate-100'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-3 w-3'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
              </svg>
            </span>
          ) : (
            <Link
              to={{
                pathname: '/',
                search: createSearchParams({
                  ...queryConfig,
                  page: (page + 1).toString()
                }).toString()
              }}
              className='flex h-8 w-9  items-center justify-center rounded-tl-sm rounded-bl-sm bg-white  shadow hover:bg-slate-100'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-3 w-3'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default SortFilter
