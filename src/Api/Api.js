

export const getAllHome = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/homes`)
    const data = await response.json()
    return data
  }