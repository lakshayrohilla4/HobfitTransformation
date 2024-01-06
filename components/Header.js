import Image from "next/image";

const Header = () => {
    return (
        <div className="lg:py-4 py-5 fixed bg-white w-full z-50">
            <Image src="/assets/Hobfit.svg" width={200} height={100}  alt={'Hobfit'} className={'lg:ml-40 ml-5 lg:w-28 w-32'}/>
        </div>
    )
}

export default Header
