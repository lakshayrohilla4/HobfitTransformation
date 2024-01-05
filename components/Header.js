import Image from "next/image";

const Header = () => {
    return (
        <div className="lg:py-5 py-5 fixed bg-white w-full z-50">
            <Image src="/assets/Hobfit.svg" width={200} height={100}  alt={'Hobfit'} className={'lg:ml-40 ml-5 w-32'}/>
        </div>
    )
}

export default Header
