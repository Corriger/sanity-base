import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import stats from './stats'
import ability from './ability'
import firearms from './firearms'
import devilArms from './devilArms'
import devilTrigger from './devilTrigger'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    stats,
    ability,
    firearms,
    devilArms,
    devilTrigger
  ])
})
