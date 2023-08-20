export function calculateEndTime(launchTime, duration) {
    // Parse launch time
    const launchParts = launchTime.split(":");
    const launchHour = parseInt(launchParts[0]);
    const launchMinute = parseInt(launchParts[1].split(" ")[0]);
    let launchPeriod = launchParts[1].split(" ")[1];
  
    // Parse duration
    const durationParts = duration.split(" ");
    const durationHours = parseInt(durationParts[0].replace("h", ""));
    const durationMinutes = parseInt(durationParts[1].replace("min", ""));
  
    // Calculate total duration in minutes
    const totalMinutes = durationHours * 60 + durationMinutes;
  
    // Calculate end time in 24-hour format
    let endHour = launchHour + Math.floor(totalMinutes / 60);
    let endMinute = launchMinute + (totalMinutes % 60);
  
    // Adjust end hour and minute if necessary
    if (endMinute >= 60) {
      endHour += Math.floor(endMinute / 60);
      endMinute %= 60;
    }
    if (endHour >= 12) {
      if (launchPeriod === "AM") {
        launchPeriod = "PM";
      } else {
        launchPeriod = "AM";
      }
    }
  
    // Format end time
    endHour = endHour % 12 || 12; // Convert to 12-hour format
    const endMinuteString = endMinute.toString().padStart(2, "0");
    const endTime = `${endHour}:${endMinuteString} ${launchPeriod}`;
  
    return endTime;
  }