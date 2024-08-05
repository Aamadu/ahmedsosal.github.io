// scripts.js content
document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('nav');
  const hero = document.querySelector('.hero');

  function handleScroll() {
      const heroBottom = hero.getBoundingClientRect().bottom;

      if (heroBottom <= 0) {
          navbar.classList.remove('transparent');
          navbar.classList.add('solid');
      } else {
          navbar.classList.remove('solid');
          navbar.classList.add('transparent');
      }
  }

  window.addEventListener('scroll', handleScroll);

  // Initial check in case the user loads the page not at the top
  handleScroll();
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
      this.setAttribute('aria-expanded', mobileMenu.classList.contains('hidden') ? 'false' : 'true');
    });
  }
});

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Simple content preloading
  window.addEventListener('load', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('loaded');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      observer.observe(section);
    });
  });

  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
      nav.classList.add('bg-gray-800', 'shadow');
    } else {
      nav.classList.remove('bg-gray-800', 'shadow');
    }
  });
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function handleScrollAnimation() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      if (isElementInViewport(section)) {
        section.classList.add('loaded');
      }
    });
  }
  
  window.addEventListener('scroll', handleScrollAnimation);
  window.addEventListener('load', handleScrollAnimation);
  
  document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Sticky navbar
    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

// Smooth scrolling for all pages
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

function setDarkMode(isDark) {
  if (isDark) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', null);
  }
}

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
  setDarkMode(true);
}

// Add event listener to dark mode toggle button
document.getElementById('darkModeToggle').addEventListener('click', () => {
  setDarkMode(!document.body.classList.contains('dark-mode'));
});

// Apply dark mode on page load
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('darkMode') === 'enabled') {
    setDarkMode(true);
  }
});

// Tree diagram
const treeData = {
  name: "PEC",
  children: [
      {
          name: "PNEC",
          children: [
              { name: "Saho" },
              { name: "Afar" }
          ]
      },
      {
          name: "POT",
          children: [
              {
                  name: "PEOT",
                  children: [
                      { name: "Rendille" },
                      { name: "Somali" },
                      { name: "Maay" },
                      { name: "Boni" }
                  ]
              },
              {
                  name: "PWOT",
                  children: [
                      { name: "Arbore" },
                      { name: "Dhasanach" },
                      { name: "Elmolo" },
                      { name: "Bayso" }
                  ]
              }
          ]
      },
      {
          name: "PHEC",
          children: [
              { name: "Hadiyya" },
              { name: "Kambaata" },
              { name: "Sidaama" },
              { name: "Gedeo" }
          ]
      },
      { name: "Burji" },
      {
          name: "PECC",
          children: [
              { name: "Oromo" },
              {
                  name: "PS",
                  children: [
                      { name: "Diraytata" },
                      { name: "Mositacha" },
                      { name: "Konso" }
                  ]
              }
          ]
      },
      {
          name: "PWEC",
          children: [
              {
                  name: "PD",
                  children: [
                      { name: "Gawwada" },
                      { name: "Ts'amakko" }
                  ]
              },
              { name: "Yaaku" }
          ]
      },
      { name: "Dahalo" }
  ]
};

const width = 600;
        const height = 600;
        const radius = Math.min(width, height) / 2 - 100;

        const svg = d3.select("#treeContainer svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", `translate(${width / 2},${height / 2})`);

        const root = d3.hierarchy(treeData);
        const treeLayout = d3.tree()
            .size([2 * Math.PI, radius])
            .separation((a, b) => (a.parent == b.parent ? 1 : 2) / a.depth);

function update(source, duration = 750) {
  const nodes = root.descendants();
  const links = root.links();

  treeLayout(root);

  const node = svg.selectAll('g.node')
      .data(nodes, d => d.id || (d.id = ++i));

  const nodeEnter = node.enter().append('g')
      .attr('class', 'node')
      .attr('transform', d => `translate(${project(source.x0 ?? 0, source.y0 ?? 0)})`);

  nodeEnter.append('circle')
      .attr('r', 5)
      .style("fill", d => d._children ? "#ccc" : "#fff")
      .style("stroke", d => color(d));

  nodeEnter.append('text')
      .attr('dy', '.31em')
      .attr('x', d => d.x < Math.PI === !d.children ? 6 : -6)
      .attr('text-anchor', d => d.x < Math.PI === !d.children ? 'start' : 'end')
      .attr('transform', d => `rotate(${(d.x < Math.PI ? d.x - Math.PI / 2 : d.x + Math.PI / 2) * 180 / Math.PI})`)
      .text(d => d.data.name)
      .style('fill-opacity', 0);

  const nodeUpdate = nodeEnter.merge(node);

  nodeUpdate.transition()
      .duration(duration)
      .attr('transform', d => `translate(${project(d.x, d.y)})`);

  nodeUpdate.select('circle')
      .attr('r', 5)
      .style("fill", d => d._children ? "#ccc" : "#fff")
      .style("stroke", d => color(d));

  nodeUpdate.select('text')
      .style('fill-opacity', 1)
      .attr('transform', d => `rotate(${(d.x < Math.PI ? d.x - Math.PI / 2 : d.x + Math.PI / 2) * 180 / Math.PI})`);

  const nodeExit = node.exit().transition()
      .duration(duration)
      .attr('transform', d => `translate(${project(source.x, source.y)})`)
      .remove();

  nodeExit.select('circle')
      .attr('r', 1e-6);

  nodeExit.select('text')
      .style('fill-opacity', 1e-6);

  const link = svg.selectAll('path.link')
      .data(links, d => d.target.id);

  const linkEnter = link.enter().insert('path', "g")
      .attr("class", d => `link branch-${getBranch(d.target)}`)
      .attr('d', d => {
          const o = {x: source.x0 ?? 0, y: source.y0 ?? 0};
          return diagonal({source: o, target: o});
      });

  const linkUpdate = linkEnter.merge(link);

  linkUpdate.transition()
      .duration(duration)
      .attr('d', diagonal);

  link.exit().transition()
      .duration(duration)
      .attr('d', d => {
          const o = {x: source.x, y: source.y};
          return diagonal({source: o, target: o});
      })
      .remove();

  nodes.forEach(d => {
      d.x0 = d.x;
      d.y0 = d.y;
  });
}

function project(x, y) {
  const angle = x - Math.PI / 2;
  return [y * Math.cos(angle), y * Math.sin(angle)];
}

function diagonal(d) {
  const [sx, sy] = project(d.source.x, d.source.y);
  const [tx, ty] = project(d.target.x, d.target.y);
  return `M${sx},${sy}C${sx},${(sy + ty) / 2} ${tx},${(sy + ty) / 2} ${tx},${ty}`;
}

function color(d) {
  const branch = getBranch(d);
  const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#9B59B6", "#FF69B4", "#8B4513", "#20B2AA"];
  return colors[(branch - 1) % colors.length];
}

function getBranch(d) {
  if (!d.parent) return 0;
  return d.parent.children.indexOf(d) + 1;
}

let i = 0;
root.x0 = Math.PI / 2;
root.y0 = 0;
root.children.forEach(collapse);
update(root);

function collapse(d) {
  if (d.children) {
      d._children = d.children;
      d._children.forEach(collapse);
      d.children = null;
  }
}

function expand(d) {
  if (d._children) {
      d.children = d._children;
      d.children.forEach(expand);
      d._children = null;
  }
}

function continuousAnimation() {
  collapse(root);
  update(root);
  setTimeout(() => {
      expand(root);
      update(root);
      setTimeout(continuousAnimation, 8000);
  }, 3000);
}

continuousAnimation();
