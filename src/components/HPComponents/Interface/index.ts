interface Input {
  value: string
  handelChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  type: string
  name?: string
  title?: string
  invalid?: boolean
  textInvalid?: string
}

interface Icon {
  image: string
  size: number
}

interface StatusTag {
  title: string
  type: 'success' | 'error' | 'warning'
}

export type { Input, Icon, StatusTag }
