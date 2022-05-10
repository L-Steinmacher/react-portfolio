const clock = () => {
    const time = new Date()
    const pstDate = time.toLocaleString("en-US", {
        timeZone: "America/Los_Angeles"
        }) 

    const t = pstDate.slice(10, 14) +  pstDate.slice(17)
    return t
  }
export default clock;