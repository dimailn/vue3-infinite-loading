import assert from 'node:assert/strict'
import test from 'node:test'

import createEventBus from '../../src/event-bus.js'

test('event buses do not receive events from other InfiniteLoading instances', () => {
  const firstBus = createEventBus()
  const secondBus = createEventBus()
  let firstBusCalls = 0
  let secondBusCalls = 0

  firstBus.$on('$InfiniteLoading:loaded', () => {
    firstBusCalls += 1
  })
  secondBus.$on('$InfiniteLoading:loaded', () => {
    secondBusCalls += 1
  })

  firstBus.$emit('$InfiniteLoading:loaded')

  assert.equal(firstBusCalls, 1)
  assert.equal(secondBusCalls, 0)
})
