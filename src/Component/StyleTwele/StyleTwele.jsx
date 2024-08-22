
const StyleTwele = (props) => {
  return (
    <>
        <div className=" px-8 py-12 border-2 rounded-lg relative">
            <img className=" " src={props.icon} alt="logo" />
            <span className=" absolute -top-9 right-2 text-[120px] text-[#F1F2F9] font-[lexend]">{props.num}</span>
            <h1 className=" text-[20px] font-[lexend] font-bold pt-6 pb-3 hover:text-[#4A62FF] transition">{props.title}</h1>
            <p className=" text-[14px] text-[#6b7385] font-[lexend] leading-6">{props.ctn}</p>
        </div>
    </>
  )
}

export default StyleTwele