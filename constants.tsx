
import React from 'react';
import { Language } from './types';

export const TRANSLATIONS: Record<Language, any> = {
  en: {
    title: 'Dz-Tech Market',
    tagline: 'Premium New Electronics Only',
    search: 'Search for products...',
    categories: 'Categories',
    bestSellers: 'Best Sellers',
    newArrivals: 'New Arrivals',
    login: 'Login',
    signup: 'Create Free Account',
    sell: 'Sell a Product',
    buy: 'Buy Now',
    checkout: 'Checkout',
    support: 'Support',
    contactUs: 'Contact Us',
    adminPanel: 'Control Panel',
    phone: 'Phone',
    address: 'Address',
    dob: 'Date of Birth',
    fullName: 'Full Name',
    ccp: 'Algeria Post (CCP) Number',
    uploadId: 'Upload National ID (Front & Back)',
    confirmPurchase: 'Confirm Purchase',
    paymentStep: 'Payment Confirmation',
    footerText: '© 2024 Dz-Tech Market. All products are guaranteed new and unused.',
    categoryLabels: {
      PHONES: 'Phones',
      DESKTOPS: 'Desktops',
      LAPTOPS: 'Laptops',
      TELEVISIONS: 'Televisions',
      COMPONENTS: 'Components'
    }
  },
  fr: {
    title: 'Dz-Tech Market',
    tagline: 'Électronique Neuve Uniquement',
    search: 'Rechercher des produits...',
    categories: 'Catégories',
    bestSellers: 'Meilleures Ventes',
    newArrivals: 'Nouveautés',
    login: 'Connexion',
    signup: 'Créer un compte gratuit',
    sell: 'Vendre un produit',
    buy: 'Acheter',
    checkout: 'Paiement',
    support: 'Support',
    contactUs: 'Contactez-nous',
    adminPanel: 'Panneau de Contrôle',
    phone: 'Téléphone',
    address: 'Adresse',
    dob: 'Date de Naissance',
    fullName: 'Nom Complet',
    ccp: 'Numéro de Compte Algérie Poste (CCP)',
    uploadId: 'Télécharger la CNI (Recto & Verso)',
    confirmPurchase: 'Confirmer l\'achat',
    paymentStep: 'Confirmation de paiement',
    footerText: '© 2024 Dz-Tech Market. Tous les produits sont garantis neufs et inutilisés.',
    categoryLabels: {
      PHONES: 'Téléphones',
      DESKTOPS: 'Ordinateurs de Bureau',
      LAPTOPS: 'Ordinateurs Portables',
      TELEVISIONS: 'Télévisions',
      COMPONENTS: 'Composants'
    }
  },
  ar: {
    title: 'سوق ديزاد تك',
    tagline: 'إلكترونيات جديدة وحصرية فقط',
    search: 'البحث عن المنتجات...',
    categories: 'الفئات',
    bestSellers: 'الأكثر مبيعاً',
    newArrivals: 'وصل حديثاً',
    login: 'تسجيل الدخول',
    signup: 'فتح حساب مجاني',
    sell: 'بيع منتج',
    buy: 'اشتري الآن',
    checkout: 'الدفع',
    support: 'الدعم الفني',
    contactUs: 'اتصل بنا',
    adminPanel: 'لوحة التحكم',
    phone: 'الهاتف',
    address: 'العنوان',
    dob: 'تاريخ الميلاد',
    fullName: 'الاسم الكامل',
    ccp: 'رقم حساب بريد الجزائر (CCP)',
    uploadId: 'رفع بطاقة التعريف الوطنية (أمام وخلف)',
    confirmPurchase: 'تأكيد الشراء',
    paymentStep: 'تأكيد الدفع',
    footerText: '© 2024 سوق ديزاد تك. جميع المنتجات مضمونة جديدة وغير مستخدمة.',
    categoryLabels: {
      PHONES: 'هواتف',
      DESKTOPS: 'أجهزة مكتبية',
      LAPTOPS: 'أجهزة محمولة',
      TELEVISIONS: 'تلفزيونات',
      COMPONENTS: 'مكونات الكمبيوتر'
    }
  }
};

export const MOCK_PRODUCTS = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    description: 'Titanium Blue, 256GB, Brand New in Box.',
    price: 185000,
    category: 'PHONES',
    photos: ['https://picsum.photos/seed/iphone/400/300'],
    status: 'APPROVED',
    isBestSeller: true,
    sellerId: 's1'
  },
  {
    id: '2',
    name: 'Asus ROG Strix G16',
    description: 'Intel i9 13th Gen, RTX 4080, 32GB RAM.',
    price: 320000,
    category: 'LAPTOPS',
    photos: ['https://picsum.photos/seed/laptop/400/300'],
    status: 'APPROVED',
    isBestSeller: true,
    sellerId: 's2'
  },
  {
    id: '3',
    name: 'LG C3 OLED 55"',
    description: '4K Smart TV, 120Hz Refresh Rate, Game Optimizer.',
    price: 245000,
    category: 'TELEVISIONS',
    photos: ['https://picsum.photos/seed/tv/400/300'],
    status: 'APPROVED',
    isBestSeller: false,
    sellerId: 's3'
  },
  {
    id: '4',
    name: 'NVIDIA RTX 4090 Founders Edition',
    description: 'Extreme performance for gaming and creation.',
    price: 380000,
    category: 'COMPONENTS',
    componentType: 'GPU',
    photos: ['https://picsum.photos/seed/gpu/400/300'],
    status: 'APPROVED',
    isBestSeller: true,
    sellerId: 's1'
  }
];
