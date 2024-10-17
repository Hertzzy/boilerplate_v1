import { FaUser } from 'react-icons/fa';
import Header from '../../../components/Headers';
import Container from '../../../components/container';
import FormGroup from '../../../components/Form/FormGroup/FormGroup';
import Input from '../../../components/Form/Input/Input';
import Select from '../../../components/Form/Select/Select';
import { useAuth } from '../../../context/AuthContext';
import { useState, useEffect } from 'react';
import { ShowAllRoles } from '../../../services/roles/roleServices';
import ButtonSubmit from '../../../components/common/Buttons/ButtonSubmit';

const UserProfile = () => {
  const { user } = useAuth();

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [roles, setRoles] = useState<{ value: string; label: string }[]>([]);
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [status, setStatus] = useState<number>(1);

  const statusOptions = [
    { value: '1', label: 'Ativo' },
    { value: '2', label: 'Inativo' }
  ];

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      const userIsAdmin = user.roles.some((role: { role_name: string }) => role.role_name === 'admin');
      setIsAdmin(userIsAdmin);

      if (user.roles.length > 0) {
        setSelectedRole(user.roles[0].role_name);
      }
      setStatus(user.status);
    }
  }, [user]);

  useEffect(() => {
    const getRoles = () => {
      ShowAllRoles()
        .then(response => {
          const rolesData = response.map((role: { role_name: string; description: string }) => ({
            value: role.role_name,
            label: role.description
          }));
          setRoles(rolesData);
        })
        .catch(error => {
          console.error('Erro ao carregar as roles', error);
        });
    };

    getRoles();
  }, []);

  return (
    <Container>
      <Header pageTitle="Perfil de Usuário" icon={<FaUser />} />
      <form>
        <FormGroup label="Name" htmlFor="name">
          <Input type="text" value={name} onChange={e => setName(e.target.value)} />
        </FormGroup>

        <FormGroup label="Email" htmlFor="email">
          <Input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </FormGroup>

        <FormGroup label="Status" htmlFor="status">
          <Select
            options={statusOptions}
            value={status.toString()}
            onChange={e => setStatus(Number(e.target.value))}
            disabled={!isAdmin}
          />
        </FormGroup>

        <FormGroup label="Roles" htmlFor="roles">
          <Select
            options={roles}
            value={selectedRole}
            onChange={e => setSelectedRole(e.target.value)}
            disabled={!isAdmin}
          />
        </FormGroup>

        <ButtonSubmit to="#">Salvar</ButtonSubmit>
      </form>
    </Container>
  );
};

export default UserProfile;
