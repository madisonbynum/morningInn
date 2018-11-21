package com.revature.beans;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="reservation")
public class Reservation {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "guest_id")
	private Guest guest;
	
	@OneToMany(mappedBy = "reservation",
			cascade = CascadeType.ALL)
	private List<OccupiedRoom> occupiedRooms = new ArrayList<>();
	
	@Column(name="date_in")
	private Date dateIn; // SQL date
	
	@Column(name="date_out")
	private Date dateOut; // SQL date
	
	@Column(name="made_by")
	private String madeBy;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Guest getGuest() {
		return guest;
	}

	public void setGuest(Guest guest) {
		this.guest = guest;
	}

	public List<OccupiedRoom> getOccupiedRooms() {
		return occupiedRooms;
	}

	public void setOccupiedRooms(List<OccupiedRoom> occupiedRooms) {
		this.occupiedRooms = occupiedRooms;
	}

	public Date getDateIn() {
		return dateIn;
	}

	public void setDateIn(Date dateIn) {
		this.dateIn = dateIn;
	}

	public Date getDateOut() {
		return dateOut;
	}

	public void setDateOut(Date dateOut) {
		this.dateOut = dateOut;
	}

	public String getMadeBy() {
		return madeBy;
	}

	public void setMadeBy(String madeBy) {
		this.madeBy = madeBy;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((dateIn == null) ? 0 : dateIn.hashCode());
		result = prime * result + ((dateOut == null) ? 0 : dateOut.hashCode());
		result = prime * result + ((guest == null) ? 0 : guest.hashCode());
		result = prime * result + id;
		result = prime * result + ((madeBy == null) ? 0 : madeBy.hashCode());
		result = prime * result + ((occupiedRooms == null) ? 0 : occupiedRooms.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Reservation other = (Reservation) obj;
		if (dateIn == null) {
			if (other.dateIn != null)
				return false;
		} else if (!dateIn.equals(other.dateIn))
			return false;
		if (dateOut == null) {
			if (other.dateOut != null)
				return false;
		} else if (!dateOut.equals(other.dateOut))
			return false;
		if (guest == null) {
			if (other.guest != null)
				return false;
		} else if (!guest.equals(other.guest))
			return false;
		if (id != other.id)
			return false;
		if (madeBy == null) {
			if (other.madeBy != null)
				return false;
		} else if (!madeBy.equals(other.madeBy))
			return false;
		if (occupiedRooms == null) {
			if (other.occupiedRooms != null)
				return false;
		} else if (!occupiedRooms.equals(other.occupiedRooms))
			return false;
		return true;
	}

	public Reservation() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Reservation [id=" + id + ", guest=" + guest + ", occupiedRooms=" + occupiedRooms + ", dateIn=" + dateIn
				+ ", dateOut=" + dateOut + ", madeBy=" + madeBy + "]";
	}

	public Reservation(Guest guest, List<OccupiedRoom> occupiedRooms, Date dateIn, Date dateOut, String madeBy) {
		super();
		this.guest = guest;
		this.occupiedRooms = occupiedRooms;
		this.dateIn = dateIn;
		this.dateOut = dateOut;
		this.madeBy = madeBy;
	}
	
//	@Column(name="guest_id") // connected to guest 
//	private int guestId;	 // might not be needed
	

}
