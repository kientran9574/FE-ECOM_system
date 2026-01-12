export interface IRessponseSuccess<Data> {
  message: string
  data?: Data
}
export interface IRessponseError<Data> {
  message: string
  data?: Data
}
