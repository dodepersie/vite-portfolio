import { AiFillGithub, AiFillInstagram, AiFillFacebook, AiOutlineWhatsApp } from 'react-icons/ai'
const currentYear = new Date().getFullYear();

export const Footer = () => {
    return (
        <>
            <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
                <div className="grid grid-flow-col gap-4">
                    <a href="https://www.facebook.com/DodePersie" className="transition duration-300 ease-in-out transform hover:scale-125"><AiFillFacebook size="2rem" /></a>
                    <a href="https://github.com/DodePersie" className="transition duration-300 ease-in-out transform hover:scale-125"><AiFillGithub size="2rem" /></a>
                    <a href="https://instagram.com/mahadisptr" className="transition duration-300 ease-in-out transform hover:scale-125"><AiFillInstagram size="2rem" /></a>
                    <a href="https://wa.me/+6287862191120?text=Hi,%20i%20want%20to%20use%20your%20service%20to%20develop%20our%20site" className="transition duration-300 ease-in-out transform hover:scale-125"><AiOutlineWhatsApp size="2rem" /></a>
                </div>

                <div>
                    <p>By Mahadi Saputra x Vite + React x Tailwind @ {currentYear}</p>
                </div>
            </footer>
        </>
    )
}