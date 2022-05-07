
const clock = () => {
    const time = new Date()
    const pstDate = time.toLocaleString("en-US", {
        timeZone: "America/Los_Angeles"
        }) 
    console.log(pstDate)
}
