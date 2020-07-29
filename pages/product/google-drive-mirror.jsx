import Layouts from '../../components/Layouts'
import HeadContent from '../../components/HeadContent'
import HeadTitle from '../../components/HeadTitle'
import TableDefault from '../../components/TableDefault'
import Featured from '../../components/Featured'
import FAQ from '../../components/FAQ'
import { Website } from '../../config/Website'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'

export default function WhatsappGateway() {

    // Head Data
    const head = {
        title: 'Google Drive Mirror',
        description: 'Kesulitan dalam mendownload file leechbox atau seedbox karena koneksi dilimit oleh ISP? Google Drive Mirror solusinya, Mirror file anda ke Google Drive secara automatis tanpa ribet.',
        keywords: 'google drive mirror, torrent to google drive, torrent cloud, torrent google drive',
        image: '/img/png/undraw_cloud_files.png',
        imageSvg: '/img/undraw_cloud_files.svg'
    }

    // Products Data
    const products = [
        { 
            name: 'GD25',
            price: 'Rp. 25k',
            duration: '/bulan',
            featured: false,
            link: `${Website.clientarea}/cart.php?a=add&pid=174`,
            description: [
                'Quota 100 GB/Bulan',
                'Max File 50GB/Files',
                'Pembelian Minimal 12-Bulan',
            ]
        },
        { 
            name: 'GD50',
            price: 'Rp. 50k',
            duration: '/bulan',
            featured: false,
            link: `${Website.clientarea}/cart.php?a=add&pid=175`,
            description: [
                'Quota 200 GB/Bulan',
                'Max File 50GB/Files',
                'Pembelian Minimal 3-Bulan', 
            ]
        },
        { 
            name: 'GD100',
            price: 'Rp. 100k',
            duration: '/bulan',
            featured: true,
            link: `${Website.clientarea}/cart.php?a=add&pid=176`,
            description: [
                'Quota 500 GB/Bulan',
                'Max File 50GB/Files',
                'Pembelian Minimal 1-Bulan', 
            ]
        },
        { 
            name: 'GD200',
            price: 'Rp. 200k',
            duration: '/bulan',
            featured: false,
            link: `${Website.clientarea}/cart.php?a=add&pid=177`,
            description: [
                'Quota 1000 GB/Bulan',
                'Max File 50GB/Files',
                'Pembelian Minimal 1-Bulan', 
            ]
        }
    ];

    const featuredLists = [
        {
            "name": "Automatic Mirror Files",
            "icon": [
                "fas",
                "bolt"
            ],
            "description": "Sistem kami akan langsung melakukan download dan upload automatis ke google drive setelah anda menginput url."
        },
        {
            "name": "Unlimited Private Google Drive Account",
            "icon": [
                "fab",
                "google-drive"
            ],
            "description": "Tidak ada batasan, berapa banyak akun yang anda tambahkan ke akun mirror anda. (Akun dari anda, bukan kami)"
        },
        {
            "name": "Notifikasi via Email",
            "icon": [
                "fas",
                "mail-bulk"
            ],
            "description": "Sistem kami akan mengirimkan pesan secara langsung ke email anda jika file sudah siap atau selesai diupload."
        },
        {
            "name": "No Limit Files",
            "icon": [
                "fas",
                "folder-plus"
            ],
            "description": "Tidak ada limitasi jenis\/ekstensi files, anda bisa mirror semua jenis files."
        }
    ]

    const faqs = [
        {
            "title": "Apa itu Google Drive Mirror?",
            "description": "Google Drive Mirror atau PFNDrive adalah sistem yang kami kembangkan untuk mempermudah para pengguna leechbox atau seedbox untuk melakukan mirror files ke google drive secara automatis."
        },
        {
            "title": "Apakah bisa mirror juga dari situs xxxx ??",
            "description": "Maaf saat ini kami hanya mendukung filehost dari server leechbox atau seedbox kami.\n\nTetapi jika anda mempunyai sources files (direct link), bisa kami tambahkan ke sistem kami. (Hubungi kami untuk pengecekan).\n\nUntuk filehost seperti zippy atau lainnya, saat ini belum kami dukung."
        }
    ]

    return (
        <>
            <HeadTitle customHead={head} />

            <Layouts>
                <HeadContent
                    title={((<><FontAwesomeIcon icon={faCloudUploadAlt} /> {head.title}</>))}
                    description={head.description}
                    imageSvg={head.imageSvg}
                >
                </HeadContent>

                <TableDefault products={products} />

                <Featured lists={featuredLists} />

                <FAQ lists={faqs} />

            </Layouts>
        </>
    )
}