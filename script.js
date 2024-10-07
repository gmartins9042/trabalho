// Exemplo de manipulação de formulário
document.getElementById('cadastroAluno').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Aluno cadastrado com sucesso!');
});

document.getElementById('cadastroTutor').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Tutor cadastrado com sucesso!');
});
const cursosRecomendados = [
    
        { nome: "Curso de Programação Python", link: "https://www.coursera.org/learn/python" },
        { nome: "Introdução ao JavaScript", link: "https://www.edx.org/course/javascript-introduction" },
        { nome: "Matemática Básica", link: "https://www.khanacademy.org/math" },
        { nome: "Design Gráfico", link: "https://www.coursera.org/learn/design" },
        { nome: "Algoritmos e Estruturas de Dados", link: "https://www.udacity.com/course/data-structures-and-algorithms-nanodegree--nd256" },
        { nome: "Desenvolvimento Web Completo", link: "https://www.udemy.com/course/web-completo-2023/" },
        { nome: "Introdução à Ciência da Computação", link: "https://www.edx.org/course/cs50s-introduction-to-computer-science" },
        { nome: "Marketing Digital", link: "https://www.coursera.org/learn/digital-marketing" },
        { nome: "Aprendizado de Máquina", link: "https://www.coursera.org/learn/machine-learning" },
        { nome: "Fotografia Digital", link: "https://www.udemy.com/course/photography-masterclass-complete-guide-to-photography/" },
        { nome: "História da Arte", link: "https://www.coursera.org/learn/art-history" },
        { nome: "Liderança e Gestão", link: "https://www.coursera.org/learn/leadership" },
        { nome: "Desenvolvimento Pessoal", link: "https://www.udemy.com/course/personal-development-course/" },
        { nome: "Finanças Pessoais", link: "https://www.khanacademy.org/college-careers-more/personal-finance" },
        { nome: "Introdução à Filosofia", link: "https://www.coursera.org/learn/intro-to-philosophy" },
        { nome: "Programação em C", link: "https://www.udacity.com/course/c-programming-for-beginners--ud117" },
        { nome: "Espanhol para Iniciantes", link: "https://www.coursera.org/learn/spanish-for-beginners" },
        { nome: "Introdução à Psicologia", link: "https://www.edx.org/course/introduction-to-psychology" },
        { nome: "Gestão de Projetos", link: "https://www.coursera.org/learn/project-management" },
        { nome: "Culinária Básica", link: "https://www.udemy.com/course/learn-to-cook-basics/" },
        { nome: "Introdução à Programação para Todos", link: "https://www.coursera.org/learn/it-programming" }
    ];


document.getElementById('btnBuscar').addEventListener('click', function() {
    const busca = document.getElementById('cursoBuscar').value.toLowerCase();
    const resultadoDiv = document.getElementById('resultadoBusca');
    resultadoDiv.innerHTML = ''; // Limpar resultados anteriores

    const resultados = cursosRecomendados.filter(curso => 
        curso.nome.toLowerCase().includes(busca)
    );

    if (resultados.length > 0) {
        resultados.forEach(curso => {
            const cursoLink = document.createElement('div');
            cursoLink.innerHTML = `<a href="${curso.link}" target="_blank">${curso.nome}</a>`;
            resultadoDiv.appendChild(cursoLink);
        });
    } else {
        resultadoDiv.innerHTML = '<p>Nenhum curso encontrado.</p>';
    }
});

// Exemplo de manipulação de formulário
document.getElementById('cadastroAluno').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Aluno cadastrado com sucesso!');
});

document.getElementById('cadastroTutor').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Tutor cadastrado com sucesso!');
});
