import React, { useState } from 'react';
import { User, Edit, Save, Settings, Bell, Bookmark, Leaf, BookOpen, MapPin, Droplets, TestTube2, AlertCircle } from 'lucide-react';

// --- Smart Profile Page Component for Punjab Farmers ---

export default function Profile() {
    // In a real app, this data would be fetched from a user database
    const [profileData, setProfileData] = useState({
        name: 'Gurbir Singh',
        district: 'Ludhiana',
        farmSize: '12.5', // in acres
    });
    const [preferences, setPreferences] = useState({
        soilType: 'Loamy',
        waterSources: ['Borewell/Tubewell', 'Canal Irrigation'],
    });

    const [isEditingProfile, setIsEditingProfile] = useState(false);
    const [isEditingPrefs, setIsEditingPrefs] = useState(false);
    const [tempProfile, setTempProfile] = useState(profileData);
    const [tempPrefs, setTempPrefs] = useState(preferences);

    // Mock data for saved items and notifications
    const savedCrops = [
        { id: 'wheat', name: 'Wheat', icon: '🌾' },
        { id: 'potato', name: 'Potatoes', icon: '🥔' },
        { id: 'kinnow', name: 'Kinnow', icon: '🍊' },
    ];
    const savedResources = [
        { title: 'Punjab State Subsidy on Agricultural Machinery' },
        { title: 'Krishi Vigyan Kendra (KVK) Locations' },
    ];
    const notifications = [
        { type: 'info', text: 'The ideal planting window for Rabi crops in your district is approaching.' },
        { type: 'success', text: 'A new subsidy for solar water pumps has been announced.' },
        { type: 'warning', text: 'Weather advisory: Expect light showers in the next 48 hours.' },
    ];

    const handleProfileChange = (e) => {
        setTempProfile({ ...tempProfile, [e.target.name]: e.target.value });
    };

    const handlePrefsChange = (e) => {
        setTempPrefs({ ...tempPrefs, [e.target.name]: e.target.value });
    };
    
    const saveProfile = () => {
        setProfileData(tempProfile);
        setIsEditingProfile(false);
        // In a real app, you would make an API call here to save the data
    };

    const savePrefs = () => {
        setPreferences(tempPrefs);
        setIsEditingPrefs(false);
        // In a real app, you would make an API call here to save the data
    };


    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                <header className="mb-10">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 flex items-center gap-3">
                        <User className="text-green-600 w-12 h-12" /> My Profile Dashboard
                    </h1>
                    <p className="mt-2 text-lg text-gray-600">Manage your farm's information and personalize your experience.</p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Profile Details Card */}
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2"><User /> User Profile</h2>
                                {!isEditingProfile ? (
                                    <button onClick={() => { setTempProfile(profileData); setIsEditingProfile(true); }} className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"><Edit size={16} /> Edit Profile</button>
                                ) : (
                                    <button onClick={saveProfile} className="flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-800 transition-colors"><Save size={16} /> Save Changes</button>
                                )}
                            </div>
                            {isEditingProfile ? (
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-sm font-medium text-gray-600">Full Name</label>
                                        <input type="text" name="name" value={tempProfile.name} onChange={handleProfileChange} className="w-full mt-1 p-2 border border-gray-300 rounded-md"/>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-600">District</label>
                                        <input type="text" name="district" value={tempProfile.district} onChange={handleProfileChange} className="w-full mt-1 p-2 border border-gray-300 rounded-md"/>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-600">Farm Size (in acres)</label>
                                        <input type="number" name="farmSize" value={tempProfile.farmSize} onChange={handleProfileChange} className="w-full mt-1 p-2 border border-gray-300 rounded-md"/>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-3 text-gray-700">
                                    <p><strong>Name:</strong> {profileData.name}</p>
                                    <p className="flex items-center gap-2"><strong><MapPin size={16} className="text-gray-500"/> District:</strong> {profileData.district}</p>
                                    <p><strong>Farm Size:</strong> {profileData.farmSize} acres</p>
                                </div>
                            )}
                        </div>

                        {/* Farm Preferences Card */}
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                             <div className="flex justify-between items-center mb-4">
                                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2"><Settings /> My Farm Preferences</h2>
                                {!isEditingPrefs ? (
                                    <button onClick={() => { setTempPrefs(preferences); setIsEditingPrefs(true); }} className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"><Edit size={16} /> Edit Preferences</button>
                                ) : (
                                    <button onClick={savePrefs} className="flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-800 transition-colors"><Save size={16} /> Save Preferences</button>
                                )}
                            </div>
                            <p className="text-sm text-gray-500 mb-4">Saving these will help pre-fill forms across the app for faster recommendations.</p>
                             {isEditingPrefs ? (
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-sm font-medium text-gray-600">Default Soil Type</label>
                                        <select name="soilType" value={tempPrefs.soilType} onChange={handlePrefsChange} className="w-full mt-1 p-2 border border-gray-300 rounded-md">
                                           <option>Alluvial</option>
                                           <option>Loamy</option>
                                           <option>Sandy</option>
                                           <option>Clayey</option>
                                        </select>
                                    </div>
                                    {/* A more complex multi-select would be here in a real app */}
                                </div>
                            ) : (
                                <div className="space-y-3 text-gray-700">
                                    <p className="flex items-center gap-2"><strong><TestTube2 size={16} className="text-gray-500"/> Default Soil Type:</strong> {preferences.soilType}</p>
                                    <p className="flex items-center gap-2"><strong><Droplets size={16} className="text-gray-500"/> Primary Water Sources:</strong> {preferences.waterSources.join(', ')}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                        {/* Alerts & Notifications */}
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2"><Bell /> Alerts & Notifications</h2>
                            <div className="space-y-3">
                                {notifications.map((note, index) => (
                                    <div key={index} className="flex items-start gap-3 text-sm p-3 bg-blue-50 border-l-4 border-blue-400 rounded-r-md">
                                        <AlertCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                        <span>{note.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                         {/* My Saved Items */}
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2"><Bookmark /> My Saved Items</h2>
                            <div>
                                <h3 className="font-semibold text-green-700 mb-2">Saved Crops</h3>
                                <ul className="space-y-2 list-inside">
                                    {savedCrops.map(crop => (
                                        <li key={crop.id} className="text-sm text-gray-600 flex items-center gap-2">{crop.icon} {crop.name}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-4 pt-4 border-t">
                                <h3 className="font-semibold text-purple-700 mb-2">Saved Resources</h3>
                                <ul className="space-y-2 list-inside">
                                     {savedResources.map(res => (
                                        <li key={res.title} className="text-sm text-gray-600 flex items-center gap-2"><BookOpen size={14}/> {res.title}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
