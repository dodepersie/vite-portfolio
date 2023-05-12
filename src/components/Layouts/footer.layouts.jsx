import { AiFillGithub, AiFillInstagram, AiFillFacebook, AiOutlineWhatsApp } from 'react-icons/ai'
import p2 from './../../assets/2.jpg'

export const Footer = () => {
    return (
        <>
            <footer className="footer footer-center p-10 bg-base-100 dark:bg-slate-900 text-base-content rounded">
                <div className="grid grid-flow-col gap-4">
                    <a href="https://www.facebook.com/DodePersie" target="_blank" rel="noreferrer" className="transition duration-300 ease-in-out transform hover:scale-125"><AiFillFacebook size="2rem" /></a>
                    <a href="https://github.com/DodePersie" target="_blank" rel="noreferrer" className="transition duration-300 ease-in-out transform hover:scale-125"><AiFillGithub size="2rem" /></a>
                    <a href="https://instagram.com/mahadisptr" target="_blank" rel="noreferrer" className="transition duration-300 ease-in-out transform hover:scale-125"><AiFillInstagram size="2rem" /></a>
                    <a href="https://wa.me/+6287862191120?text=Hi,%20i%20want%20to%20use%20your%20service%20to%20develop%20our%20site" target="_blank" rel="noreferrer"  className="transition duration-300 ease-in-out transform hover:scale-125"><AiOutlineWhatsApp size="2rem" /></a>
                </div>

                <div className="flex justify-items-start lg:items-center">
                    <div className="avatar inline-block mr-1">
                        <div className="w-8 rounded-full ring ring-blue-500 ring-offset-base-100 ring-offset-2 cursor-pointer">
                            <img src={p2} alt="Mahadi Saputra's Avatar" />
                        </div>
                    </div>
            
                    <p className="text-sm">By Mahadi Saputra @ Vercel x React &lt;3</p>
                </div>            
            </footer>
        </>
    )
}