import { NavigationProvider } from './navigation'
import { TamaguiProviderProps } from 'tamagui-extras'
import { LmTamaguiProvider } from './LmTamaguiProvider'
import { SolitoImageProvider } from 'solito/image'

export function Provider({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) {
  return (
    <LmTamaguiProvider {...rest}>
      <SolitoImageProvider nextJsURL="http://localhost:3000">{children}</SolitoImageProvider>
    </LmTamaguiProvider>
  )
}
