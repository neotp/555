
const kv = {
    'ENTROPISM-2': ['ENTROPISM-1', 'ENTROPISM-3'],
    'KITSCH-2': ['KITSCH-1', 'KITSCH-3'],
    'NEOMILITARISM-2': ['NEOMILITARISM-1', 'NEOMILITARISM-3'],
    'NEOKITSCH-2': ['NEOKITSCH-1', 'NEOKITSCH-3']
  }

  document.querySelectorAll('.art-style-poster').forEach(function(item) {

    item.addEventListener('mouseover', function(e) {
      document.querySelector('#' + kv[e.target.id][1]).style.visibility = 'visible';
      document.querySelector('#' + kv[e.target.id][0]).style.visibility = 'visible';
      e.target.style.border = 'solid 2px #f7db90';
    });

    item.addEventListener('mouseout', function(e) {
      document.querySelector('#' + kv[e.target.id][1]).style.visibility = 'hidden';
      document.querySelector('#' + kv[e.target.id][0]).style.visibility = 'hidden';
      e.target.style.border = 'none';
    });

  });