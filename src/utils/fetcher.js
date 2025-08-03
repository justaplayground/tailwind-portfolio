const fetcher = async (input, init = {}) => {
  const res = await fetch(input, init)
  return res.json()
}

export default fetcher
