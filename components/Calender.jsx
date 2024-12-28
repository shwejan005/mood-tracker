import React from 'react'


const months = { 'January': 'Jan', 'February': 'Feb', 'March': 'Mar', 'April': 'Apr', 'May': 'May', 'June': 'Jun', 'July': 'Jul', 'August': 'Aug', 'September': 'Sept', 'October': 'Oct', 'November': 'Nov', 'December': 'Dec' }
const monthsArr = Object.keys(months)
const now = new Date()
const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


function Calender() {
  const year = 2024
  const month = 'December'
  const day = new Date(year,Object.keys(months).indexOf(month),1)
  const firstDayOfMonth = monthNow.getDay()
  const daysInMonth = new Date(year,Object.keys(month).indexOf(month) + 1, 0)
  const daysToDisplay = firstDayOfMonth + daysInMonth
  const numRows = (Math.floor(daysToDisplay / 7)) + (daysToDisplay % 7 ? 1 : 0)

  return (
    <div className='flex flex-col gap-2'>
        <div className='grid grid-cols-5 gap-4'>
            <button onClick={() => {
                handleIncrementMonth(-1)
            }} className='mr-auto text-indigo-400 text-lg sm:text-xl duration-200 hover:opacity-60'><i className="fa-solid fa-circle-chevron-left"></i></button>
            <p className={'text-center col-span-3 capitalized whitespace-nowrap textGradient ' + fugaz.className}>{selectedMonth}, {selectedYear}</p>
            <button onClick={() => {
                handleIncrementMonth(+1)
            }} className='ml-auto text-indigo-400 text-lg sm:text-xl duration-200 hover:opacity-60'><i className="fa-solid fa-circle-chevron-right"></i></button>
        </div>
        <div className='flex flex-col overflow-hidden gap-1 py-4 sm:py-6 md:py-10'>
            {[...Array(numRows).keys()].map((row, rowIndex) => {
                return (
                    <div key={rowIndex} className='grid grid-cols-7 gap-1'>
                        {dayList.map((dayOfWeek, dayOfWeekIndex) => {
                            let dayIndex = (rowIndex * 7) + dayOfWeekIndex - (firstDayOfMonth - 1)

                            let dayDisplay = dayIndex > daysInMonth ? false : (row === 0 && dayOfWeekIndex < firstDayOfMonth) ? false : true

                            let isToday = dayIndex === now.getDate()

                            if (!dayDisplay) {
                                return (
                                    <div className='bg-white' key={dayOfWeekIndex} />
                                )
                            }

                            let color = demo ?
                                gradients.indigo[baseRating[dayIndex]] :
                                dayIndex in data ?
                                    gradients.indigo[data[dayIndex]] :
                                    'white'

                            return (
                                <div style={{ background: color }} className={'text-xs sm:text-sm border border-solid p-2 flex items-center gap-2 justify-between rounded-lg ' + (isToday ? ' border-indigo-400' : ' border-indigo-100') + (color === 'white' ? ' text-indigo-400' : ' text-white')} key={dayOfWeekIndex}>
                                    <p>{dayIndex}</p>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    </div>
)
}

export default Calender