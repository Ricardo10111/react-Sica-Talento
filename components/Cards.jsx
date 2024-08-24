export default function Cards({ cards }) {
  return (
    <div className='flex flex-wrap justify-center gap-6 mt-12 '>
      {cards.map((card, index) => (
        <div
          key={index}
          className='flex flex-col gap-3 w-[20rem] bottom-2 shadow-custom-light rounded-lg p-6 cursor-pointer bg-transparent  hover:shadow-custom-dark transition-shadow duration-1000'
        >
          <div className='flex justify-start '>
            <img className='w-[3rem]' src={card.img} alt={card.title} />
          </div>
          <h1 className='text-2xl font-bold text-[#1e293b]'>{card.title}</h1>
          <p className='text-lg  mt-4'>{card.description}</p>
        </div>
      ))}
    </div>
  )
}
