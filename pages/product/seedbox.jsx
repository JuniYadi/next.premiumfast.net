import Layouts from '../../components/Layouts'
import HeadContent from '../../components/HeadContent'
import HeadTitle from '../../components/HeadTitle'
import TableDefault from '../../components/TableDefault'
import Featured from '../../components/Featured'
import FAQ from '../../components/FAQ'
import { Website } from '../../config/Website'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'

export default function WhatsappGateway() {

    // Head Data
    const head = {
        title: 'Seedbox',
        description: 'Seedbox, Fitur dan Fungsi sama seperti Leechbox, hanya berbeda di status download yaitu ketika anda selesai mendownload, maka status akan menjadi Seeding.',
        keywords: 'seedbox murah, seedbox indonesia, torrent convert',
        image: '/img/png/undraw_my_files.png',
        imageSvg: '/img/undraw_my_files.svg'
    }

    // Products Data
    const products = [
        { 
            name: 'Budget',
            price: 'Rp. 100k',
            duration: '/bulan',
            featured: false,
            link: `${Website.clientarea}/cart.php?a=add&pid=172`,
            description: [
                '200 GB HDD',
                '1 Gbps Speed',
                '1 IPv4 [Shared]',
                'Unmetered Bandwidth',
                'Unlimited Active Torrent',
                'Seeding Enable',
                'Only Support Private Seeding',
                'Free Tools Upload to Google Drive',
                'Pembelian Minimal 1-Bulan',
            ]
        },
        { 
            name: 'D1',
            price: 'Rp. 150k',
            duration: '/bulan',
            featured: true,
            link: `${Website.clientarea}/cart.php?a=add&pid=44`,
            description: [
                '350 GB HDD',
                '1 Gbps Speed',
                '1 IPv4 [Shared]',
                'Unmetered Bandwidth',
                'Unlimited Active Torrent',
                'Seeding Enable',
                'Only Support Private Seeding',
                'Free Tools Upload to Google Drive',
                'Pembelian Minimal 1-Bulan',                        
            ]
        },
        { 
            name: 'D2',
            price: 'Rp. 300k',
            duration: '/bulan',
            featured: false,
            link: `${Website.clientarea}/cart.php?a=add&pid=45`,
            description: [
                '750 GB HDD',
                '1 Gbps Speed',
                '1 IPv4 [Shared]',
                'Unmetered Bandwidth',
                'Unlimited Active Torrent',
                'Seeding Enable',
                'Only Support Private Seeding',
                'Free Tools Upload to Google Drive',
                'Pembelian Minimal 1-Bulan',  
            ]
        },
        { 
            name: 'D3',
            price: 'Rp. 450k',
            duration: '/bulan',
            featured: false,
            link: `${Website.clientarea}/cart.php?a=add&pid=46`,
            description: [
                '1200 GB HDD',
                '1 Gbps Speed',
                '1 IPv4 [Shared]',
                'Unmetered Bandwidth',
                'Unlimited Active Torrent',
                'Seeding Enable',
                'Only Support Private Seeding',
                'Free Tools Upload to Google Drive',
                'Pembelian Minimal 1-Bulan', 
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
            "description": "Produk akan diaktifkan setelah pembayaran diterima, Minimal 10 menit, Maksimal 1x24 Jam."
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
            "name": "Private Account",
            "icon": [
                "fas",
                "user-cog"
            ],
            "description": "Setiap user mempunyai akun masing-masing, sehingga tidak menggangu user lain yang sedang menggunakan."
        },
        {
            "name": "Private Storage",
            "icon": [
                "fas",
                "hdd"
            ],
            "description": "Setiap user mempunyai disk private masing-masing, user lain tidak akan dapat menghapus file anda, membuat file anda tetap terjaga dengan aman."
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
            "name": "ruTorrent Web UI",
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
            "title": "Apa itu Seedbox?",
            "description": "Seedbox adalah aplikasi berbasis web untuk mendownload file torrent dan merubah file torrent menjadi file aslinya."
        },
        {
            "title": "Apa perbedaan Leechbox dan Seedbox?",
            "description": "Hanya berbeda di akses. Jika leechbox, setelah anda selesai download 100%, system akan automatis stop download anda. Berbeda dengan seedbox yang akan menlanjutkan seeding jika proses download telah selesai 100%."
        },
        {
            "title": "Apa yang dimaksud dengan Direct Link Download?",
            "description": "Anda bisa langsung mendownload file dari akun anda tanpa syarat ini itu. Dengan direct link, proses download akan lebih cepat dan tanpa expired link."
        },
        {
            "title": "Apa itu Proxy Download Singapore?",
            "description": "Proxy Download adalah sebuah link yang diarahkan ke singapore terlebih dahulu sebelum ke server asli."
        },
        {
            "title": "Bagaimana Cara Upload Ke Google Drive?",
            "description": "Kami sudah menyediakan tools untuk upload files dari leechbox atau seedbox ke google drive, pastikan anda sudah order tools ini (PFNDrive), kemudian anda hanya perlu memasukkan url files ke sistem kami tersebut. Semua files akan diproses secara automatis.\n\nInfo lebih lengkap: https:\/\/manage.premiumfast.net\/announcements\/138\/INFO-Mirror-File-LeechboxorSeedbox-ke-Google-Drive-Automatis.html"
        }
    ]

    return (
        <>
            <HeadTitle customHead={head} />

            <Layouts>
                <HeadContent
                    title={((<><FontAwesomeIcon icon={faCloudDownloadAlt} /> {head.title}</>))}
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