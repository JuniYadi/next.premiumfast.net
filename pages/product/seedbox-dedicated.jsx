import Layouts from '../../components/Layouts'
import HeadContent from '../../components/HeadContent'
import HeadTitle from '../../components/HeadTitle'
import TableDefault from '../../components/product/TableDefault'
import Featured from '../../components/product/Featured'
import FAQ from '../../components/product/FAQ'
import { Website } from '../../config/Website'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHdd } from '@fortawesome/free-solid-svg-icons'

export default function WhatsappGateway() {

    // Head Data
    const head = {
        title: 'Seedbox Dedicated',
        description: 'Ingin mendapatkan Private IPv4 pada Seedbox? Seebox Dedicated adalah solusi utama bagi anda yang ingin Private IPv4, Fitur dan Fungsi sama seperti Seedbox.',
        keywords: 'seedbox dedicated murah, seedbox dedicated indonesia, torrent convert',
        image: '/img/png/undraw_cloud_files.png',
        imageSvg: '/img/undraw_cloud_files.svg'
    }

    // Products Data
    const products = [
        { 
            name: 'DS-500',
            price: 'Rp. 350k',
            duration: '/bulan',
            featured: false,
            link: `${Website.clientarea}/cart.php?a=add&pid=168`,
            description: [
                'Intel Atom Series',
                '2GB RAM',
                '4GB Swap',
                '500 GB HDD Disk',
                'Unlimited Bandwith',
                'Unlimited Active Torrent',
                '100 Mbps Port Speed',
                '1 IP Address (IPv4)',
            ]
        }
    ];

    const featuredLists = [
        {
            "name": "Manual Activation",
            "icon": [
                "fas",
                "clock"
            ],
            "description": "Produk akan diaktifkan setelah pembayaran diterima, Minimal 60 menit, Maksimal 1x24 Jam."
        },
        {
            "name": "Easy Access",
            "icon": [
                "fab",
                "chrome"
            ],
            "description": "Akses produk bisa dilakukan langsung melalui browser tanpa aplikasi tambahan."
        },
        {
            "name": "Android Compatible",
            "icon": [
                "fab",
                "android"
            ],
            "description": "Akses akun melalui android dengan mudah menggunakan aplikasi TransDroid."
        },
        {
            "name": "Private Server",
            "icon": [
                "fas",
                "server"
            ],
            "description": "Anda mendapatkan full source dari server, mulai dari CPU\/RAM\/HDD. 1 Dedicated Seedbox hanya mendapatkan 1 IPv4 untuk 1 pelanggan. Pembelian baru akan mendapatkan server berbeda."
        },
        {
            "name": "Free reInstall",
            "icon": [
                "fas",
                "redo-alt"
            ],
            "description": "Free Installasi 1x Pertama kali dan 1x\/Bulan, Jika lebih akan dikenakan biaya tambahan."
        },
        {
            "name": "Direct Link Download",
            "icon": [
                "fas",
                "route"
            ],
            "description": "Akses semua files anda dengan direct link download, tanpa hambatan apapun."
        },
        {
            "name": "rTorrent & ruTorrent Web UI",
            "icon": [
                "fas",
                "globe"
            ],
            "description": "Kami menggunakan rTorrent dan ruTorrent WEB UI sebagai interfaces kepada anda."
        },
        {
            "name": "RAR\/ZIP\/SPLIT File",
            "icon": [
                "fas",
                "file-archive"
            ],
            "description": "Anda bisa melakukan proses rar\/zip\/split file langsung untuk mempermudah pemilahan file anda."
        }
    ]

    const faqs = [
        {
            "title": "Apa itu Dedicated Seedbox?",
            "description": "Dedicated Seedbox sama seperti Seedbox pada umumnya, hanya perbedaannya, bahwa di dedicated seedbox, anda mendapatkan 1 ip adress (IPv4) dan dedicated source seperti cpu/ram/hdd/internet."
        },
        {
            "title": "Apakah saya mendapatkan full disk/HDD sesuai deskripsi?",
            "description": "Tidak, HDD/Disk size yang kami cantumkan merupakan HDD Kosong dan belum terinstall OS Linux Debian dsn package nya.\n\nDetail Free Space Disk HDD :\n500 GB  => 425 GB HDD (Free Total Setelah Install OS dan Package)."
        }
    ]

    return (
        <>
            <HeadTitle customHead={head} />

            <Layouts>
                <HeadContent
                    title={((<><FontAwesomeIcon icon={faHdd} /> {head.title}</>))}
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