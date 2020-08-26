import Layouts from '../../components/Layouts';
import HeadContent from '../../components/HeadContent';
import HeadTitle from '../../components/HeadTitle';
import TableDefault from '../../components/product/TableDefault';
import Featured from '../../components/product/Featured';
import FAQ from '../../components/product/FAQ';
import { Website } from '../../config/Website';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';

export default function WhatsappGateway() {
    // Head Data
    const head = {
        title: 'Leechbox',
        description:
            'Butuh file asli dari .torrent? Leechbox bisa convert file .torrent ke file asli dengan mudah melalui browser dengan direct link download.',
        keywords: 'leechbox murah, leechbox indonesia, torrent convert',
        image: '/img/png/undraw_file_sync.png',
        imageSvg: '/img/undraw_file_sync.svg',
    };

    // Products Data
    const products = [
        {
            name: 'SD',
            price: 'Rp. 15k',
            duration: '/bulan',
            featured: false,
            link: `${Website.clientarea}/cart.php?a=add&pid=40`,
            description: [
                '20 GB HDD',
                '100 Mbps Speed',
                'IPv4 Shared',
                'Unmetered Bandwidth',
                '5 Active Torrent',
                'Seeding Disable',
                'Free Tools Upload to Google Drive',
                'Pembelian Minimal 12-Bulan',
                'Location: Europe',
            ],
        },
        {
            name: 'SMP',
            price: 'Rp. 30k',
            duration: '/bulan',
            featured: false,
            link: `${Website.clientarea}/cart.php?a=add&pid=41`,
            description: [
                '60 GB HDD',
                '100 Mbps Speed',
                'IPv4 Shared',
                'Unmetered Bandwidth',
                '15 Active Torrent',
                'Seeding Disable',
                'Free Tools Upload to Google Drive',
                'Pembelian Minimal 6-Bulan',
                'Location: Europe',
            ],
        },
        {
            name: 'SMA',
            price: 'Rp. 50k',
            duration: '/bulan',
            featured: true,
            link: `${Website.clientarea}/cart.php?a=add&pid=42`,
            description: [
                '100 GB HDD',
                '100 Mbps Speed',
                'IPv4 Shared',
                'Unmetered Bandwidth',
                '45 Active Torrent',
                'Seeding Disable',
                'Free Tools Upload to Google Drive',
                'Pembelian Minimal 3-Bulan',
                'Location: Europe',
            ],
        },
        {
            name: 'MHS',
            price: 'Rp. 100k',
            duration: '/bulan',
            featured: false,
            link: `${Website.clientarea}/cart.php?a=add&pid=43`,
            description: [
                '250 GB HDD',
                '100 Mbps Speed',
                'IPv4 Shared',
                'Unmetered Bandwidth',
                '45 Active Torrent',
                'Seeding Disable',
                'Free Tools Upload to Google Drive',
                'Pembelian Minimal 1-Bulan',
                'Location: Europe',
            ],
        },
    ];

    const featuredLists = [
        {
            name: 'Instant Activation',
            icon: ['fas', 'rocket'],
            description:
                'Produk automatis aktif ketika pembayaran telah diterima atau invoice telah lunas.',
        },
        {
            name: 'Easy Access',
            icon: ['fab', 'chrome'],
            description:
                'Akses produk bisa dilakukan langsung melalui browser tanpa aplikasi tambahan.',
        },
        {
            name: 'Android Compatible',
            icon: ['fab', 'android'],
            description:
                'Akses akun melalui android dengan mudah menggunakan aplikasi TransDroid.',
        },
        {
            name: 'Private Account',
            icon: ['fas', 'user-cog'],
            description:
                'Setiap user mempunyai akun masing-masing, sehingga tidak menggangu user lain yang sedang menggunakan.',
        },
        {
            name: 'Private Storage',
            icon: ['fas', 'hdd'],
            description:
                'Setiap user mempunyai disk private masing-masing, user lain tidak akan dapat menghapus file anda, membuat file anda tetap terjaga dengan aman.',
        },
        {
            name: 'Direct Link Download',
            icon: ['fas', 'route'],
            description:
                'Akses semua files anda dengan direct link download, tanpa hambatan apapun.',
        },
        {
            name: 'ruTorrent Web UI',
            icon: ['fas', 'globe'],
            description:
                'Kami menggunakan rTorrent dan ruTorrent WEB UI sebagai interfaces kepada anda.',
        },
        {
            name: 'RAR/ZIP/SPLIT File',
            icon: ['fas', 'file-archive'],
            description:
                'Anda bisa melakukan proses rar/zip/split file langsung untuk mempermudah pemilahan file anda.',
        },
    ];

    const faqs = [
        {
            title: 'Apa itu Leechbox?',
            description:
                'Leechbox adalah aplikasi berbasis web untuk mendownload file torrent dan merubah file torrent menjadi file aslinya.',
        },
        {
            title: 'Apa perbedaan Leechbox dan Seedbox?',
            description:
                'Hanya berbeda di akses. Jika leechbox, setelah anda selesai download 100%, system akan automatis stop download anda. Berbeda dengan seedbox yang akan menlanjutkan seeding jika proses download telah selesai 100%.',
        },
        {
            title: 'Apa yang dimaksud dengan Direct Link Download?',
            description:
                'Anda bisa langsung mendownload file dari akun anda tanpa syarat ini itu. Dengan direct link, proses download akan lebih cepat dan tanpa expired link.',
        },
        {
            title: 'Apa itu Proxy Download Singapore?',
            description:
                'Proxy Download adalah sebuah link yang diarahkan ke singapore terlebih dahulu sebelum ke server asli.',
        },
        {
            title: 'Bagaimana Cara Upload Ke Google Drive?',
            description:
                'Kami sudah menyediakan tools untuk upload files dari leechbox atau seedbox ke google drive, pastikan anda sudah order tools ini (PFNDrive), kemudian anda hanya perlu memasukkan url files ke sistem kami tersebut. Semua files akan diproses secara automatis.\n\nInfo lebih lengkap: https://manage.premiumfast.net/announcements/138/INFO-Mirror-File-LeechboxorSeedbox-ke-Google-Drive-Automatis.html',
        },
    ];

    return (
        <>
            <HeadTitle customHead={head} />

            <Layouts>
                <HeadContent
                    title={
                        <>
                            <FontAwesomeIcon icon={faCloudDownloadAlt} />{' '}
                            {head.title}
                        </>
                    }
                    description={head.description}
                    imageSvg={head.imageSvg}
                ></HeadContent>

                <TableDefault products={products} />

                <Featured lists={featuredLists} />

                <FAQ lists={faqs} />
            </Layouts>
        </>
    );
}
