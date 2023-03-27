import { SolitoImage } from 'solito/image'
import { Square } from 'tamagui'

export const BgImage = () => {
  // this works
  // return <Square size="$5" bg="blue" />

  // this doesn't work
  return <SolitoImage alt="" width={200} height={200} src="/images/alarm.png" />
}
