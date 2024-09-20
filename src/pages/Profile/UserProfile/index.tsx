import { FaUser } from 'react-icons/fa';
import Header from '../../../components/Headers';
import Container from '../../../components/container';
import FormGroup from '../../../components/Form/FormGroup';
import Input from '../../../components/Form/Input';
import Select from '../../../components/Form/Select'; // O select que você criou
import { useAuth } from '../../../context/AuthContext';
import { useState, useEffect } from 'react';
import { ShowAllRoles } from '../../../services/roles/roleServices'; // Importa o serviço de roles

const UserProfile = () => {
  const { user } = useAuth(); // Aqui, o user deve ser tipado como User

  // Estados para armazenar os dados do usuário
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [roles, setRoles] = useState<{ value: string; label: string }[]>([]);
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [status, setStatus] = useState<number>(1);

  // Mapeamento de status (1 para Ativo, 2 para Inativo)
  const statusOptions = [
    { value: '1', label: 'Ativo' },
    { value: '2', label: 'Inativo' }
  ];

  // Preencher os campos quando o componente é montado
  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      // Verifica se o usuário tem a role 'admin'
      const userIsAdmin = user.roles.some((role: { role_name: string }) => role.role_name === 'admin');
      setIsAdmin(userIsAdmin);
      // Seta a role selecionada com a primeira role do usuário
      if (user.roles.length > 0) {
        setSelectedRole(user.roles[0].role_name);
      }
      // Seta o status do usuário (1 para ativo, 2 para inativo)
      setStatus(user.status);
    }
  }, [user]);

  // Carregar as roles do sistema
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
      </form>
    </Container>
  );
};

export default UserProfile;
