import DashboardIcon from '../assets/icons/dashboard.svg';
import ShippingIcon from '../assets/icons/shipping.svg';
import ProductIcon from '../assets/icons/product.svg';
import UserIcon from '../assets/icons/user.svg';

const sidebar_menu = [
    {
        id: 1,
        icon: DashboardIcon,
        path: 'dashboard',
        title: 'Dashboard',
    },
    {
        id: 2,
        icon: UserIcon,
        path: 'schools',
        title: 'Schools',
    },
    {
        id: 3,
        icon: ShippingIcon,
        path: 'news',
        title: 'News',
    },
    {
        id: 4,
        icon: ProductIcon,
        path: 'activities',
        title: 'Activities',
    },
    {
        id: 5,
        icon: ProductIcon,
        path: 'courses',
        title: 'Courses',
    },
    {
        id: 6,
        icon: ProductIcon,
        path: 'departments',
        title: 'Departments',
    }
]

export default sidebar_menu;