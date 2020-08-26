import Layouts from '../../components/Layouts';
import HeadContent from '../../components/HeadContent';
import HeadTitle from '../../components/HeadTitle';
import TableDefault from '../../components/product/TableDefault';
import FeaturedKVMVPS from '../../components/product/FeaturedKVMVPS';
import OperatingSystem from '../../components/product/OperatingSystem';
import { Website } from '../../config/Website';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer } from '@fortawesome/free-solid-svg-icons';

export default function KvmVPSGermany() {
    // Head Data
    const head = {
        title: 'KVM VPS Germany',
        description:
            'KVM VPS Germany adalah salah satu produk KVM VPS menggunakan Disk NVMe yang sangat cepat untuk memproses data pada server di bandingkan dengan HDD biasa atau SSD pada umumnya.',
        keywords:
            'KVM VPS Germany, KVM VPS Germany NVMe, KVM VPS Windows, VPS Windows NVMe, KVM VPS NVMe, Germany SSD, VPS Germany Windows',
        image: '/img/png/undraw_connected_world.png',
        imageSvg: '/img/undraw_connected_world.svg',
    };

    // Products Data
    const products = [
        {
            name: 'GR-NVMe-2',
            price: 'Rp. 100k',
            duration: '/bulan',
            featured: false,
            link: `${Website.clientarea}/cart.php?a=add&pid=205`,
            description: [
                '1 vCPU',
                '2 GB RAM',
                '25 GB NVMe Disk',
                '1 IPv4',
                'Unlimited Bandwidth',
                'Full Administrator/root',
                'Location: Germany',
            ],
        },
        {
            name: 'GR-NVMe-4',
            price: 'Rp. 200k',
            duration: '/bulan',
            featured: true,
            link: `${Website.clientarea}/cart.php?a=add&pid=206`,
            description: [
                '1 vCPU',
                '4 GB RAM',
                '50 GB NVMe Disk',
                '1 IPv4',
                'Unlimited Bandwidth',
                'Full Administrator/root',
                'Location: Germany',
            ],
        },
        {
            name: 'GR-NVMe-8',
            price: 'Rp. 400k',
            duration: '/bulan',
            featured: false,
            link: `${Website.clientarea}/cart.php?a=add&pid=207`,
            description: [
                '2 vCPU',
                '8 GB RAM',
                '100 GB NVMe Disk',
                '1 IPv4',
                'Unlimited Bandwidth',
                'Full Administrator/root',
                'Location: Germany',
            ],
        },
        {
            name: 'GR-NVMe-16',
            price: 'Rp. 800k',
            duration: '/bulan',
            featured: true,
            link: `${Website.clientarea}/cart.php?a=add&pid=208`,
            description: [
                '3 vCPU',
                '16 GB RAM',
                '200 GB NVMe Disk',
                '1 IPv4',
                'Unlimited Bandwidth',
                'Full Administrator/root',
                'Location: Germany',
            ],
        },
        {
            name: 'GR-NVMe-32',
            price: 'Rp. 1500k',
            duration: '/bulan',
            featured: false,
            link: `${Website.clientarea}/cart.php?a=add&pid=209`,
            description: [
                '4 vCPU',
                '32 GB RAM',
                '400 GB NVMe Disk',
                '1 IPv4',
                'Unlimited Bandwidth',
                'Full Administrator/root',
                'Location: Germany',
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

                <TableDefault
                    products={products}
                    responsive='w-full sm:w-1/1 md:w-1/3 lg:w-1/5 xl:w-1/5'
                />

                <FeaturedKVMVPS />
                <OperatingSystem />
            </Layouts>
        </>
    );
}
