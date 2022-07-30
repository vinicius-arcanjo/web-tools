import Javascript from 'templates/Javascript'

import { filter } from 'utils/data/filter'

export default function Index() {
  return <Javascript title="Filter" code={filter} />
}
