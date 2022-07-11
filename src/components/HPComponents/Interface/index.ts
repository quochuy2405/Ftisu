interface Input {
  value: string
  handelChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  type: string
  name?: string
  title?: string
  invalid?: boolean
  textInvalid?: string
}
export type { Input }
