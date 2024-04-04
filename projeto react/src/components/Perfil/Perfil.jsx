import './perfil.css'


export const Perfil = () => {

    const usuario = {
        nome: 'Sanderson Luiz Celestino',
        avatar: 'https://github.com/SandersonGit.png'
    }

    return (
        <div>
            <img src={usuario.avatar} alt="" className='perfil-avatar' />
            <h3 className='perfil-titulo'>{usuario.nome}</h3>
        </div>
    )
}

