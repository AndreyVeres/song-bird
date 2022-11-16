export class moveBlocks {
    constructor(menu, quiz, results , gallery) {
        this.menu = document.querySelector(menu)
       
        this.gallery = document.querySelector(gallery)
        this.quiz = document.querySelector(quiz)
        this.results = document.querySelector(results)
    }

    showMenu() {
        this.menu.style.transform = 'translateX(0)';
        this.quiz.style.transform = 'translateX(-250%)';
        this.results.style.transform = 'translateY(250%)';
        this.gallery.style.transform = 'translateX(250%)';
    }

    showQuiz() {
        this.quiz.style.transform = 'translateX(0)';
        this.menu.style.transform = 'translateY(-250%)';
        
        this.results.style.transform = 'translateY(250%)';
        this.gallery.style.transform = 'translateX(250%)';
    }

    showResults(){
        this.results.style.transform = 'translateY(0)';
        this.quiz.style.transform = 'translateX(-250%)';
        this.menu.style.transform = 'translateY(-250%)';
    
        this.gallery.style.transform = 'translateX(250%)';
    }

    showGallery() {
        this.gallery.style.transform = 'translateX(0)';
        this.quiz.style.transform = 'translateX(-250%)';
        this.menu.style.transform = 'translateY(-250%)';
        this.results.style.transform = 'translateY(250%)';
        
    }
}