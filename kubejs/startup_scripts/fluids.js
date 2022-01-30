onEvent('fluid.registry', event => {
  event.create('thick_fluid', fluid => {
    fluid.textureThin(0xFF0000)
    fluid.bucketColor(0xFF0000)
    fluid.displayName('Primal Fire Essence')
  })
})