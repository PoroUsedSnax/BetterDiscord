//META{"name":"GuildSeparatorFix"}*//

class GuildSeparatorFix {
  getName() {return 'GuildSeparatorFix';}
  getDescription() {return 'A fix to allow the guild separator to be styled separately';}
  getVersion() {return '1.1.0';}
  getAuthor() {return 'PoroUsedSnax';}

  load() {}

  start() {
    $('.guildSeparator-3s64Iy').parent().addClass('guildSeparator');
  }

  stop() {
    $('.guildSeparator-3s64Iy').parent().removeClass('guildSeparator');
  }

  onSwitch() {
    $('.guildSeparator-3s64Iy').parent().addClass('guildSeparator');
  }
}
