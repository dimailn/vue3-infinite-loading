import Emitter from 'tiny-emitter'

export default function createEventBus() {
  const emitter = new Emitter()

  return {
    $on: (...args) => emitter.on(...args),
    $once: (...args) => emitter.once(...args),
    $off: (...args) => emitter.off(...args),
    $emit: (...args) => emitter.emit(...args)
  }
}
