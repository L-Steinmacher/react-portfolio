const clock = () => {
    const time = new Date()
    const pstDate = time.toLocaleString("en-US", {
        timeZone: "America/Los_Angeles"
        }) 

        /**
         * ToDo this is returning the wrong time
         * 
         */

    const t = pstDate.slice(10, 14) +  pstDate.slice(17)
    return t
  }
export default clock;