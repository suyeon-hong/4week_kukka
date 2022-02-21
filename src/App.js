import { Temp } from '@/components/base';

export default function App({ $target }) {
  new Temp({
    $target,
    initialState: 'hi',
  });
}
