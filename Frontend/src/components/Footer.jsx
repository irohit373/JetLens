import { FaGithub } from 'react-icons/fa';

const Footer = () => {
    return(
        <footer>
            <div>
                <div className="flex flex-col items-center justify-center bg-sky-700 py-10">
                    <h1 className="text-4xl pb-4 text-white mb-4">Aerolens</h1>
                    <a href="https://github.com/irohit373/Jetlens-LSTM-NLP-MERN-Microservices" target="_blank" rel="noopener noreferrer" className="flex items-center text-white mb-4">
                        <FaGithub className="h-6 w-6 mr-2" />
                        Aerolens GitHub Repository
                    </a>
                    <p className="text-lg text-white">Major Project</p>
                    <p className="text-sm text-white mt-2">© MIT Licensed</p>
                </div>
            </div>
        </footer>
    );

}

export default Footer;
