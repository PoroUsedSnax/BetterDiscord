//META{"name":"GuildSeparatorFix"}*//

var GuildSeparatorFix = function () {};

GuildSeparatorFix.prototype.start = () => {
  $('.guildSeparator-3s64Iy').parent().addClass('guildSeparator');
};

GuildSeparatorFix.prototype.onSwitch = () => {
  $('.guildSeparator-3s64Iy').parent().addClass('guildSeparator');
}

GuildSeparatorFix.prototype.getName = () => {
  return "GuildSeparatorFix";
};

GuildSeparatorFix.prototype.getDescription = () => {
  return "A fix to allow the guild separator to be styled separately.";
};

GuildSeparatorFix.prototype.getVersion = () => {
  return "1.0.0";
};

GuildSeparatorFix.prototype.getAuthor = () => {
  return "PoroUsedSnax";
};
