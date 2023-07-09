import { Routes, Route } from 'react-router-dom';

import { Layout } from './Layout/Layout';
import { ProfilePage } from '../Pages/ProfilePage/ProfilePage';
import { BanquePage } from 'Pages/BanquePage/BanquePage';
import { DashboardPage } from 'Pages/DashboardPage/DashboardPage';
import { ActivesPage } from 'Pages/ActivesPage/ActivesPage';
import { FacturationPage } from 'Pages/FacturationPage/FacturationPage';
import { GestionPage } from 'Pages/GestionPage/GestionPage';
import { DocumentsPage } from 'Pages/DocumentsPage/DocumentsPage';
import { ClusterPage } from 'Pages/ClusterPage/ClusterPage';
import { FormationPage } from 'Pages/FormationPage/FormationPage';
import { PatrimonialPage } from 'Pages/PatrimonialPage/PatrimonialPage';

import { SettingsPage } from 'Pages/SettingsPage/SettingsPage';
import { Stack } from '@mui/material';
import { ErrorPage } from 'Pages/ErrorPage/ErrorPage';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="profile" element={<ProfilePage />}>
            <Route path="settings" element={<SettingsPage />} />
            <Route path="change_password" element={<div>ChangePassword</div>} />
            <Route path="exit" element={<div>Exit</div>} />
          </Route>
          <Route path="banque" element={<BanquePage />}>
            <Route path="compte" element={<div>compte</div>} />
            <Route path="virements" element={<div>ChangePassword</div>} />
            <Route path="cartes" element={<div>Exit</div>} />
          </Route>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="actives" element={<ActivesPage />} />
          <Route path="facturation" element={<FacturationPage />} />
          <Route path="gestion" element={<GestionPage />}>
            <Route path="expense" element={<div>Notes de frais</div>} />
            <Route path="management" element={<div>Gestion IK</div>} />
          </Route>
          <Route path="documents" element={<DocumentsPage />} />
          <Route path="cluster" element={<ClusterPage />} />
          <Route path="formation" element={<FormationPage />} />
          <Route path="patrimonial" element={<PatrimonialPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};
