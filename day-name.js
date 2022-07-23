const getDay = () => {
    const days = ['saturday', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday',]
    const date = new Date(12 / 07 / 2016)
    const day = days[date.getDay()]
    console.log(day)
}
getDay()