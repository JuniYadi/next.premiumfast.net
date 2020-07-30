import Layouts from '../components/Layouts'
import Whyus from '../components/Whyus'
import HeadContent from '../components/HeadContent'
import HeadTitle from '../components/HeadTitle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUserEdit, faSignInAlt, faUserSecret, faUserShield } from '@fortawesome/free-solid-svg-icons'
import { Website } from '../config/Website'

export default function Home() {

  // Head Data
  const head = {
    title: 'Login',
    description: 'Sudah memiliki akun di Premium Fast Network? Login ke Halaman Client Area untuk manage akun dan produk anda.',
    keywords: 'RDP, RDP User, KVM, KVM VPS, KVM VPS Singapore, KVM VPS Canada, KVM VPS France, Whatsapp Gateway, VPN',
    image: '/img/png/undraw_product_iteration.png',
    imageSvg: '/img/undraw_product_iteration.svg'
  }

  return (
    <>
      <HeadTitle customHead={head} />

      <Layouts>
        <HeadContent
          title={((<><FontAwesomeIcon icon={faUserShield} /> {head.title}</>))}
          description={head.description}
          imageSvg={head.imageSvg}
        >
        </HeadContent>

        <section className="bg-white border-b py-8">
            <div className="container max-w-5xl mx-auto m-8">
                <div className="flex flex-col md:flex-row">
                    <div className="w-full w-1/1 md:w-1/2 mx-6 my-6 px-4 shadown-md rounded-full">
                        <img src="/img/undraw_secure_login.svg" alt="Login"/>
                    </div>
                    <div className="w-full w-1/1 md:w-1/2 mx-6 my-6 px-4 shadown-md rounded-full">
                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" method="POST" action={`${Website.clientarea}/dologin.php`}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Username
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="youremail@johndoe.com" />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                                    Password
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
                            </div>
                            <div className="flex items-center justify-between">
                                <input type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" name="submit" id="submit" value="Sign In"/>

                                <div className="flex flex-col align-baseline text-right">
                                    <a className="font-bold text-sm text-blue-500 hover:text-blue-800" href={`${Website.clientarea}/pwreset.php`}>
                                        Forgot Password?
                                    </a>
                                    <a className="font-bold text-sm text-blue-500 hover:text-blue-800" href={`${Website.clientarea}/register.php`}>
                                        Register New Account
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
      </Layouts>
    </>
  )
}
