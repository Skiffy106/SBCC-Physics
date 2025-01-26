import Image from 'next/image';

const Banner: React.FC = () => {
    return (
        <div className="flex flex-row items-center justify-center relative z-30 bg-slate-800 h-8 text-sm font-medium text-slate-50 space-x-2 border-b border-slate-50">
            <a href="#" className="flex flex-row items-center space-x-2">
                <Image width={20} height={20} alt="SBCC Logo" src="/logos/sbcc-base-white.svg" className="w-[20px] h-[20px]" />
                <span className="text-sm sm:text-base">Department of Physics and Engineering</span>
            </a>
        </div>
    );
}

export default Banner;