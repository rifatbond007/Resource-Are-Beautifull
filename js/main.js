const courseData = {
  cse411: {
    code: 'CSE 411',
    title: 'Machine Learning',
    credit: '2 Credits',
    resources: [
      {
        label: 'Video Courses',
        items: [
          { name: 'Andrew Ng — ML Specialization', url: 'https://www.coursera.org/specializations/machine-learning-introduction', icon: '🎓', type: 'Coursera' },
          { name: 'StatQuest ML Playlist', url: 'https://www.youtube.com/playlist?list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF', icon: '▶', type: 'YouTube' },
          { name: 'Fast.ai Practical ML', url: 'https://www.fast.ai', icon: '🚀', type: 'Free' }
        ]
      },
      {
        label: 'Books & Notes',
        items: [
          { name: 'ISL (Free PDF) — James et al.', url: 'https://www.statlearning.com/', icon: '📖', type: 'Textbook' },
          { name: 'Stanford CS229 Notes', url: 'https://cs229.stanford.edu/notes2022fall/main_notes.pdf', icon: '📄', type: 'PDF' }
        ]
      },
      {
        label: 'Tips',
        tip: 'Focus on bias-variance tradeoff, gradient descent, and model evaluation. Practice on Kaggle datasets.'
      }
    ]
  },
  cse412: {
    code: 'CSE 412',
    title: 'Machine Learning Sessional',
    credit: '1 Credit',
    resources: [
      {
        label: 'Practice & Tools',
        items: [
          { name: 'Kaggle Learn', url: 'https://www.kaggle.com/learn', icon: '🏆', type: 'Interactive' },
          { name: 'Scikit-learn Tutorial', url: 'https://scikit-learn.org/stable/tutorial/index.html', icon: '🔧', type: 'Docs' },
          { name: 'Google Colab', url: 'https://colab.research.google.com/', icon: '☁', type: 'Lab' }
        ]
      },
      {
        label: 'Tips',
        tip: 'Implement algorithms from scratch first (NumPy), then use Scikit-learn for viva preparation.'
      }
    ]
  },
  cse415: {
    code: 'CSE 415',
    title: 'Research Methodology',
    credit: '2 Credits',
    resources: [
      {
        label: 'Core Resources',
        items: [
          { name: 'Google Scholar', url: 'https://scholar.google.com', icon: '🔍', type: 'Search' },
          { name: 'UNC — Lit Review Guide', url: 'https://www.writingcenter.unc.edu/tips-and-tools/literature-reviews/', icon: '📝', type: 'Guide' },
          { name: 'IEEE Paper Writing', url: 'https://www.ieee.org/publications/authors/write-a-paper.html', icon: '📄', type: 'Guide' },
          { name: 'Zotero', url: 'https://www.zotero.org/', icon: '🗂️', type: 'Tool' }
        ]
      },
      {
        label: 'Tips',
        tip: 'Start using a reference manager now. Learn to read papers in 3 passes.'
      }
    ]
  },
  ged411: {
    code: 'GED 411',
    title: 'Business Communications',
    credit: '3 Credits',
    resources: [
      {
        label: 'Resources',
        items: [
          { name: 'Wharton — Business Writing', url: 'https://www.coursera.org/learn/wharton-communication-skills', icon: '🎓', type: 'Coursera' },
          { name: 'English with Lucy', url: 'https://www.youtube.com/c/EnglishwithLucy', icon: '▶', type: 'YouTube' },
          { name: 'Purdue OWL', url: 'https://owl.purdue.edu/owl/purdue_owl.html', icon: '📖', type: 'Reference' },
          { name: 'Grammarly', url: 'https://www.grammarly.com/', icon: '✍', type: 'Tool' }
        ]
      },
      {
        label: 'Tips',
        tip: 'Practice professional emails and presentations. Record yourself to improve.'
      }
    ]
  },
  cse401: {
    code: 'CSE 401',
    title: 'Capstone Project (Part-1)',
    credit: '2 Credits',
    resources: [
      {
        label: 'Project Planning',
        items: [
          { name: 'GitHub', url: 'https://github.com/', icon: '💻', type: 'Essential' },
          { name: 'Trello', url: 'https://trello.com/', icon: '📋', type: 'Tool' },
          { name: 'Overleaf', url: 'https://www.overleaf.com/', icon: '📄', type: 'LaTeX' },
          { name: 'arXiv CS Papers', url: 'https://arxiv.org/list/cs.AI/recent', icon: '🔬', type: 'Research' }
        ]
      },
      {
        label: 'Tips',
        tip: 'Choose a problem you care about. Define scope tightly from day one.'
      }
    ]
  },
  cse413: {
    code: 'CSE 413',
    title: 'Compiler Design',
    credit: '3 Credits',
    resources: [
      {
        label: 'Video Courses',
        items: [
          { name: 'Neso Academy', url: 'https://www.youtube.com/playlist?list=PLBlnK6fEyqRjT3oJxFXkgjsBk-UsM0rm7', icon: '▶', type: 'YouTube' },
          { name: 'Ravindrababu Ravula', url: 'https://www.youtube.com/playlist?list=PL9KE3r8T7evFnknkLGaGUFpHYEBQhENg6', icon: '▶', type: 'YouTube' }
        ]
      },
      {
        label: 'Books',
        items: [
          { name: 'Dragon Book', url: 'https://suif.stanford.edu/dragonbook/', icon: '🐉', type: 'Textbook' },
          { name: 'Crafting Interpreters', url: 'https://craftinginterpreters.com/', icon: '📖', type: 'Online' }
        ]
      },
      {
        label: 'Tips',
        tip: 'Master finite automata, CFGs, and parsing (LL, LR) — ~60% of exams.'
      }
    ]
  },
  cse414: {
    code: 'CSE 414',
    title: 'Compiler Design Sessional',
    credit: '1 Credit',
    resources: [
      {
        label: 'Tools & Practice',
        items: [
          { name: 'PLY — Python Lex-Yacc', url: 'https://www.dabeaz.com/ply/', icon: '🔧', type: 'Library' },
          { name: 'Flex', url: 'https://flex.sourceforge.net/', icon: '⚡', type: 'Tool' },
          { name: 'GNU Bison', url: 'https://www.gnu.org/software/bison/', icon: '🦬', type: 'Tool' },
          { name: 'Awesome Compilers', url: 'https://github.com/aalhour/awesome-compilers', icon: '⭐', type: 'List' }
        ]
      },
      {
        label: 'Tips',
        tip: 'Use PLY for quick prototyping. Understand tokenizer-parser connection.'
      }
    ]
  }
};

const modal = document.getElementById('modal');
const modalCode = document.getElementById('modalCode');
const modalTitle = document.getElementById('modalTitle');
const modalCredit = document.getElementById('modalCredit');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
const courseCards = document.querySelectorAll('.course-card');

function openModal(courseId) {
  const data = courseData[courseId];
  if (!data) return;

  modalCode.textContent = data.code;
  modalTitle.textContent = data.title;
  modalCredit.textContent = data.credit;

  let bodyHtml = '';
  data.resources.forEach(group => {
    if (group.tip) {
      bodyHtml += `
        <div class="tip-box">
          <strong>Tip:</strong> ${group.tip}
        </div>
      `;
    } else {
      bodyHtml += `
        <div class="resource-group">
          <div class="group-label">${group.label}</div>
          <div class="resource-list">
            ${group.items.map(item => `
              <a class="resource-link" href="${item.url}" target="_blank">
                <span class="icon">${item.icon}</span>
                <span class="name">${item.name}</span>
                <span class="type">${item.type}</span>
              </a>
            `).join('')}
          </div>
        </div>
      `;
    }
  });

  modalBody.innerHTML = bodyHtml;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

courseCards.forEach(card => {
  card.addEventListener('click', () => {
    const courseId = card.dataset.course;
    openModal(courseId);
  });
});

modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    closeModal();
  }
});
