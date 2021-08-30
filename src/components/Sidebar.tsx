import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { GiTie} from 'react-icons/gi'

export function Sidebar() {
  return (
    <div>
      <img 
        src="https://avatars.githubusercontent.com/u/60943819?v=4"
        alt="user avatar"
        className="w-32 h-32 mx-auto rounded-full"
      />

      <h3 className="my-4 text-2xl font-medium tracking-wider font-kaushan">
        <span >Welington </span>
        Ribeiro
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Dev. Front-end</p> 
      <a href="" className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full" download="name" > 
        <GiTie className="w-6 h-6"  />
        Donwload CV
      </a>

      {/* social icons */}  
      <div className="flex justify-around w-9/12 mx-auto text-green md:w-full">
        <a href="">
          <AiFillGithub  className="w-8 h-8 cursor-pointer"/>
        </a>
        <a href="">
          <AiFillLinkedin  className="w-8 h-8 cursor-pointer"/>
        </a>
        <a href="">
          <AiFillInstagram  className="w-8 h-8 cursor-pointer"/>
        </a>
      </div>

      {/* address */}
      <div 
        className="py-4 my-5 bg-gray-200" 
        style={{marginLeft:'-1rem', marginRight: '-1rem'}}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation/>
          <span>  Fortaleza, Ceará</span>
        </div>
        <p className="my-2">wellingtonvx@gmail.com</p>
        <p className="my-2">(85) 9 9793-3893</p>
      </div>
      <button 
        className="w-8/12 px-5 py-2 my-2 font-semibold text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
        onClick={ () => window.open('mailto:wellingtonvx@gmail.com')}
      >
        Email
      </button>

      <button className="w-8/12 px-5 py-2 my-2 font-semibold text-white rounded-full bg-gradient-to-r from-green to-blue-400" >Mudar tema</button>
    </div>
  );
}
