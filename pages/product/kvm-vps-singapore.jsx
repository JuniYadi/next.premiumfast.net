import Layouts from '../../components/Layouts';
import HeadContent from '../../components/HeadContent';
import HeadTitle from '../../components/HeadTitle';
import TableDefault from '../../components/product/TableDefault';
import FeaturedKVMVPSSGP from '../../components/product/FeaturedKVMVPSSGP';
import OperatingSystem from '../../components/product/OperatingSystem';
import { Website } from '../../config/Website';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer } from '@fortawesome/free-solid-svg-icons';

export default function KvmVPSSingapore() {
    // Head Data
    const head = {
        title: 'KVM VPS Singapore',
        description:
            'KVM VPS Singapore adalah salah satu produk KVM VPS menggunakan Disk SSD yang sangat cepat untuk memproses data pada server di bandingkan dengan HDD biasa pada umumnya.',
        keywords:
            'KVM VPS Singapore, KVM VPS Singapore SSD, KVM VPS Windows, VPS Windows, KVM VPS, Singapore SSD, VPS Singapore Windows',
        image: '/img/png/undraw_connected_world.png',
        imageSvg: '/img/undraw_connected_world.svg',
    };

    // Products Data
    const products = [
        {
            name: 'SG-SSD-1',
            price: 'Rp. 100k',
            duration: '/bulan',
            featured: false,
            link: `${Website.clientarea}/cart.php?a=add&pid=144`,
            description: [
                '1 vCPU',
                '1 GB RAM',
                '20 GB SSD Disk',
                '1 IPv4',
                '500 GB Bandwidth',
                'Full Administrator/root',
                'Location: Singapore',
            ],
        },
        {
            name: 'SG-SSD-2',
            price: 'Rp. 200k',
            duration: '/bulan',
            featured: false,
            link: `${Website.clientarea}/cart.php?a=add&pid=145`,
            description: [
                '1 vCPU',
                '2 GB RAM',
                '35 GB SSD Disk',
                '1 IPv4',
                '750 GB Bandwidth',
                'Full Administrator/root',
                'Location: Singapore',
            ],
        },
        {
            name: 'SG-SSD-4',
            price: 'Rp. 400k',
            duration: '/bulan',
            featured: true,
            link: `${Website.clientarea}/cart.php?a=add&pid=147`,
            description: [
                '2 vCPU',
                '4 GB RAM',
                '65 GB SSD Disk',
                '1 IPv4',
                '1.500 GB Bandwidth',
                'Full Administrator/root',
                'Location: Singapore',
            ],
        },
        {
            name: 'SG-SSD-8',
            price: 'Rp. 800k',
            duration: '/bulan',
            featured: false,
            link: `${Website.clientarea}/cart.php?a=add&pid=209`,
            description: [
                '3 vCPU',
                '8 GB RAM',
                '150 GB SSD Disk',
                '1 IPv4',
                '3.000 GB Bandwidth',
                'Full Administrator/root',
                'Location: Singapore',
            ],
        },
    ];

    return (
        <>
            <HeadTitle customHead={head} />

            <Layouts>
                <HeadContent
                    title={
                        <>
                            <FontAwesomeIcon icon={faServer} /> {head.title}
                        </>
                    }
                    description={head.description}
                    imageSvg={head.imageSvg}
                ></HeadContent>

                <TableDefault products={products} />

                <FeaturedKVMVPSSGP />
                <OperatingSystem />
            </Layouts>
        </>
    );
}
