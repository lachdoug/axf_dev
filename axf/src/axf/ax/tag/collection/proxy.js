ax.tag.collection.proxy = () => new Proxy(
  ax.tag.collection.function,
  ax.tag.collection.shim
)
