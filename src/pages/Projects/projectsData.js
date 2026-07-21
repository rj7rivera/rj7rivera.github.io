import uesgModaLogo from '../../assets/image/projects/uesg-moda-logo.png'
import vendedoresUesgImage from '../../assets/image/projects/vendedores uesg.png'

export const projects = [
  {
    id: '03',
    fileName: 'vendedores_uesg.exe',
    title: 'Vendedores UESG',
    description: 'Gestión de vendedores, pedidos, inventario y seguimiento de ventas puerta a puerta.',
    technologies: ['JavaScript', 'CSS3', 'Ventas', 'Reportes'],
    preview: 'sales',
    image: vendedoresUesgImage,
    imageVariant: 'vendedores',
    url: 'https://github.com/rj7rivera/Vendedores-UESG-',
    external: true,
  },
  {
    id: '04',
    fileName: 'proyecto_04.exe',
    title: 'Sitio Café',
    description: 'Landing page cálida y moderna para un restaurante con identidad propia.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX'],
    preview: 'cafe',
    url: '#',
  },
  {
    id: '05',
    fileName: 'matriculacion_rj7.exe',
    title: 'Sistema de Matriculación',
    description: 'Gestión de estudiantes, cupos por paralelo y reportes académicos para la Unidad Educativa San Gabriel.',
    technologies: ['JavaScript', 'CSS3', 'PostgreSQL', 'PLpgSQL'],
    preview: 'enrollment',
    url: 'https://github.com/rj7rivera/Sistema-Matriculacion-RJ7',
    external: true,
  },
  {
    id: '06',
    fileName: 'uesg_moda.exe',
    title: 'UESG Moda',
    description: 'Catálogo responsive para visualizar productos y gestionar la venta de prendas personalizadas.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX'],
    preview: 'sales',
    image: uesgModaLogo,
    url: 'https://github.com/rj7rivera/UESG---MODA',
    external: true,
  },
]