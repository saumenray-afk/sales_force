// ===== SALES FORCE DEMO - CONFIGURATION =====
// Standalone demo with simulated data - No real business data

// App Configuration
const APP_CONFIG = {
    name: 'Sales Force Demo',
    version: '1.0.0-demo',
    build: 'DEMO-2025.10',
    
    // This is a DEMO app with simulated data
    isDemo: true,
    demoMessage: 'This is a demo version with simulated data',
    
    // Repository (for deployment only, no data fetching)
    repository: {
        username: 'saumenray-afk',
        repo: 'sales_force',
        branch: 'main'
    },
    
    // Map Settings
    map: {
        center: [12.9716, 77.5946], // Bangalore
        zoom: 12,
        minZoom: 8,
        maxZoom: 18,
        tileLayer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: '© OpenStreetMap contributors'
    },
    
    // Feature Flags
    features: {
        offlineMode: true,
        gpsTracking: true,
        gpsNavigation: true, // NEW: Navigation feature
        photoCapture: true,
        voiceNotes: false,
        digitalSignature: false,
        biometricAuth: false
    },
    
    // Performance Ratings
    performanceRatings: {
        excellent: { min: 90, label: 'Excellent', color: '#28a745' },
        good: { min: 75, label: 'Good', color: '#17a2b8' },
        average: { min: 60, label: 'Average', color: '#ffc107' },
        below: { min: 0, label: 'Below Average', color: '#dc3545' }
    },
    
    // Storage Keys
    storageKeys: {
        distributors: 'demo_distributors',
        pois: 'demo_pois',
        visits: 'demo_visits',
        orders: 'demo_orders',
        expenses: 'demo_expenses',
        retailers: 'demo_retailers',
        settings: 'demo_settings',
        lastSync: 'demo_last_sync'
    }
};

// Demo User Credentials
const VALID_USERS = {
    'demo': {
        password: 'demo123',
        role: 'admin',
        name: 'Demo User',
        email: 'demo@salesforce.com'
    },
    'admin': {
        password: 'admin123',
        role: 'admin',
        name: 'Admin User',
        email: 'admin@salesforce.com'
    },
    'manager': {
        password: 'manager123',
        role: 'manager',
        name: 'Sales Manager',
        email: 'manager@salesforce.com'
    },
    'sales': {
        password: 'sales123',
        role: 'sales',
        name: 'Sales Person',
        email: 'sales@salesforce.com'
    }
};

// Session Configuration
const SESSION_CONFIG = {
    timeout: 120, // minutes
    storageKey: 'demo_session',
    rememberMe: true
};

// SIMULATED DEMO DATA - Retailers acting as distributors
const DEMO_DISTRIBUTORS = [
    {
        name: 'Green Valley Supermarket',
        city: 'Koramangala, Bangalore',
        address: 'Shop No. 45, 80 Feet Road, Koramangala 4th Block',
        retailers: 25,
        lat: 12.9352,
        lng: 77.6245,
        target: 500000,
        sales: 425000,
        tsm: 'Demo Manager',
        classification: 'Retailer',
        phone: '+91-9876543210',
        contact: 'Rajesh Kumar'
    },
    {
        name: 'City Mart Store',
        city: 'Indiranagar, Bangalore',
        address: '100 Feet Road, Near Metro Station, Indiranagar',
        retailers: 18,
        lat: 12.9716,
        lng: 77.6412,
        target: 350000,
        sales: 298000,
        tsm: 'Demo Manager',
        classification: 'Retailer',
        phone: '+91-9876543211',
        contact: 'Priya Sharma'
    },
    {
        name: 'Fresh Foods Outlet',
        city: 'Whitefield, Bangalore',
        address: 'ITPL Main Road, Whitefield',
        retailers: 32,
        lat: 12.9698,
        lng: 77.7499,
        target: 600000,
        sales: 540000,
        tsm: 'Demo Manager',
        classification: 'Retailer',
        phone: '+91-9876543212',
        contact: 'Amit Patel'
    },
    {
        name: 'Downtown Grocery',
        city: 'MG Road, Bangalore',
        address: 'Brigade Road, MG Road Area',
        retailers: 22,
        lat: 12.9716,
        lng: 77.5946,
        target: 450000,
        sales: 380000,
        tsm: 'Demo Manager',
        classification: 'Retailer',
        phone: '+91-9876543213',
        contact: 'Sneha Reddy'
    },
    {
        name: 'Metro Quick Mart',
        city: 'Jayanagar, Bangalore',
        address: '4th Block, Jayanagar Shopping Complex',
        retailers: 20,
        lat: 12.9250,
        lng: 77.5838,
        target: 400000,
        sales: 356000,
        tsm: 'Demo Manager',
        classification: 'Retailer',
        phone: '+91-9876543214',
        contact: 'Vikram Singh'
    },
    {
        name: 'Express Convenience Store',
        city: 'HSR Layout, Bangalore',
        address: 'Sector 1, 27th Main Road, HSR Layout',
        retailers: 28,
        lat: 12.9121,
        lng: 77.6446,
        target: 520000,
        sales: 468000,
        tsm: 'Demo Manager',
        classification: 'Retailer',
        phone: '+91-9876543215',
        contact: 'Anita Desai'
    },
    {
        name: 'Smart Shopping Center',
        city: 'Electronic City, Bangalore',
        address: 'Phase 1, Electronic City',
        retailers: 35,
        lat: 12.8456,
        lng: 77.6603,
        target: 650000,
        sales: 585000,
        tsm: 'Demo Manager',
        classification: 'Retailer',
        phone: '+91-9876543216',
        contact: 'Suresh Menon'
    },
    {
        name: 'Corner Store Supermarket',
        city: 'Malleshwaram, Bangalore',
        address: '8th Cross, Malleshwaram',
        retailers: 16,
        lat: 13.0067,
        lng: 77.5703,
        target: 320000,
        sales: 275000,
        tsm: 'Demo Manager',
        classification: 'Retailer',
        phone: '+91-9876543217',
        contact: 'Lakshmi Nair'
    },
    {
        name: 'Urban Fresh Market',
        city: 'BTM Layout, Bangalore',
        address: '2nd Stage, BTM Layout',
        retailers: 24,
        lat: 12.9165,
        lng: 77.6101,
        target: 480000,
        sales: 432000,
        tsm: 'Demo Manager',
        classification: 'Retailer',
        phone: '+91-9876543218',
        contact: 'Mohammed Ali'
    },
    {
        name: 'Premium Retail Hub',
        city: 'Marathahalli, Bangalore',
        address: 'Outer Ring Road, Marathahalli',
        retailers: 30,
        lat: 12.9591,
        lng: 77.7011,
        target: 570000,
        sales: 513000,
        tsm: 'Demo Manager',
        classification: 'Retailer',
        phone: '+91-9876543219',
        contact: 'Deepak Rao'
    },
    {
        name: 'Neighborhood Store',
        city: 'Banashankari, Bangalore',
        address: '3rd Stage, Banashankari',
        retailers: 19,
        lat: 12.9250,
        lng: 77.5487,
        target: 380000,
        sales: 342000,
        tsm: 'Demo Manager',
        classification: 'Retailer',
        phone: '+91-9876543220',
        contact: 'Kavita Iyer'
    },
    {
        name: 'Sunrise Superstore',
        city: 'Yelahanka, Bangalore',
        address: 'New Town, Yelahanka',
        retailers: 26,
        lat: 13.1007,
        lng: 77.5963,
        target: 510000,
        sales: 459000,
        tsm: 'Demo Manager',
        classification: 'Retailer',
        phone: '+91-9876543221',
        contact: 'Ramesh Babu'
    }
];

// Simulated POI Data (Points of Interest for expansion)
const DEMO_POIS = [
    {
        name: 'New Tech Park Cafeteria',
        category: 'F&B',
        subCategory: 'Cafeteria',
        lat: 12.9855,
        lng: 77.7253,
        address: 'Manyata Tech Park',
        potential: 'High',
        estimatedRevenue: 150000
    },
    {
        name: 'City Mall Food Court',
        category: 'F&B',
        subCategory: 'Food Court',
        lat: 12.9279,
        lng: 77.6271,
        address: 'Garuda Mall, Magrath Road',
        potential: 'High',
        estimatedRevenue: 200000
    },
    {
        name: 'Downtown Office Complex',
        category: 'Corporate',
        subCategory: 'Office',
        lat: 12.9783,
        lng: 77.6408,
        address: 'Prestige Tech Park, Marathahalli',
        potential: 'Medium',
        estimatedRevenue: 120000
    },
    {
        name: 'Garden View Hotel',
        category: 'Hospitality',
        subCategory: 'Hotel',
        lat: 12.9698,
        lng: 77.7499,
        address: 'ITPL Main Road, Whitefield',
        potential: 'High',
        estimatedRevenue: 180000
    },
    {
        name: 'Quick Stop Mini Mart',
        category: 'Retail',
        subCategory: 'Convenience Store',
        lat: 12.9141,
        lng: 77.6210,
        address: 'Sarjapur Road',
        potential: 'Medium',
        estimatedRevenue: 80000
    }
];

// Demo Plant Locations
const DEMO_PLANTS = {
    plant1: {
        name: 'Main Distribution Center',
        lat: 12.9716,
        lng: 77.5946,
        capacity: '10000 units/day',
        address: 'Central Bangalore'
    }
};

// Export configuration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        APP_CONFIG,
        VALID_USERS,
        SESSION_CONFIG,
        DEMO_DISTRIBUTORS,
        DEMO_POIS,
        DEMO_PLANTS
    };
}
